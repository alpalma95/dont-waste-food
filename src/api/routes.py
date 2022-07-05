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

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/signup', methods=['POST'])
def handle_signup():
    response_body = request.get_json(force=True)
    hashed_pw = generate_password_hash(response_body['password'], "md5")
    new_user = User(email=response_body['email'], password_hashed=hashed_pw, username=response_body['username'], name=response_body['name'])
    db.session.add(new_user)
    db.session.commit()
    return "ok", 200