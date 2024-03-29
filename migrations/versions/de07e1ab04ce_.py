"""empty message

Revision ID: de07e1ab04ce
Revises: 11ddf67d0ef1
Create Date: 2022-08-04 17:49:56.860225

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'de07e1ab04ce'
down_revision = '11ddf67d0ef1'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('shopping_list', sa.Column('measure', sa.String(length=250), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('shopping_list', 'measure')
    # ### end Alembic commands ###
