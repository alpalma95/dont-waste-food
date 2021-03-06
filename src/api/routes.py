"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from sqlalchemy import or_

api = Blueprint('api', __name__)


@api.route('/signup', methods=['POST'])
def handle_signup():
    response_body = request.get_json(force=True)
    
    existing_username = User.query.filter_by(username=response_body["username"]).first()
    existing_email = User.query.filter_by(email=response_body["email"]).first()
    entered_password = response_body["password"]
    confirmed_password = response_body["confirmed_password"]

    if not existing_email and not existing_username and entered_password == confirmed_password:
        hashed_pw = generate_password_hash(response_body['password'], "md5")
        new_user = User(email=response_body['email'], password_hashed=hashed_pw, username=response_body['username'], name=response_body['name'])
        db.session.add(new_user)
        db.session.commit()
        return "ok", 200
    
    elif not existing_email and not existing_username and entered_password != confirmed_password:
        error_body = {
            "error_message": "Password don't match!"
        }
        return jsonify(error_body), 401

    elif existing_email and not existing_username:
        error_body = {
            "error_message": "Email already taken!"
        }
        return jsonify(error_body), 401

    elif existing_username and not existing_email:
        error_body = {
            "error_message": "Username already taken!"
        }
        return jsonify(error_body), 401

    else:
        error_body = {
            "error_message": "Username and email already taken!"
        }
        return jsonify(error_body), 401

@api.route('/login', methods=['POST'])
def user_login():
    response_body = request.get_json(force=True)
    email = response_body['email']
    password = response_body['password']
    user = User.query.filter(or_(User.email == email, User.username == email)).first()
    pw_hash = user.password_hashed
    password_matched = check_password_hash(pw_hash, password)
    
    if password_matched:
        access_token = create_access_token(identity=user.id)
        return jsonify({"token": access_token, "user_id": user.id})
    else:
        return "NOT OK", 401


# allow login also with username