"""empty message

<<<<<<<< HEAD:migrations/versions/86088bbfc5f0_.py
Revision ID: 86088bbfc5f0
Revises: 
Create Date: 2025-01-22 23:44:33.348340
========
Revision ID: a537f56c9cc0
Revises: 
Create Date: 2025-01-27 22:07:51.146021
>>>>>>>> develop:migrations/versions/a537f56c9cc0_.py

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
<<<<<<<< HEAD:migrations/versions/86088bbfc5f0_.py
revision = '86088bbfc5f0'
========
revision = 'a537f56c9cc0'
>>>>>>>> develop:migrations/versions/a537f56c9cc0_.py
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('exercise',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('url', sa.String(length=200), nullable=False),
    sa.Column('name', sa.String(length=50), nullable=False),
    sa.Column('description', sa.String(length=100), nullable=True),
    sa.Column('muscle_group', sa.Enum('biceps', 'triceps', 'quadriceps', 'back', 'femoral', 'chest', 'shoulder', 'forearm', 'calf', 'gluteus', name='musclegroup'), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('url')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('firstName', sa.String(length=40), nullable=False),
    sa.Column('lastName', sa.String(length=50), nullable=False),
    sa.Column('birthDate', sa.Date(), nullable=True),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('username', sa.String(length=20), nullable=False),
    sa.Column('password', sa.String(length=255), nullable=False),
    sa.Column('salt', sa.String(length=180), nullable=True),
    sa.Column('rol', sa.Enum('general', 'entrenador', 'nutricionista', 'fisioterapeuta', 'admin', name='rol'), nullable=True),
    sa.Column('avatar', sa.String(length=180), nullable=True),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.Column('create_at', sa.DateTime(timezone=True), nullable=False),
    sa.Column('update_at', sa.DateTime(timezone=True), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('measures',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('weight', sa.Float(), nullable=True),
    sa.Column('height', sa.Integer(), nullable=True),
    sa.Column('biceps', sa.Float(), nullable=True),
    sa.Column('waist', sa.Float(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('request',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('telephone', sa.String(length=16), nullable=True),
    sa.Column('linkedin', sa.String(length=100), nullable=True),
    sa.Column('profession', sa.String(length=20), nullable=True),
    sa.Column('status', sa.Enum('waiting', 'refused', 'approved', 'none', name='status'), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('social',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('instagram', sa.String(length=30), nullable=True),
    sa.Column('facebook', sa.String(length=30), nullable=True),
    sa.Column('twitter', sa.String(length=30), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('social')
    op.drop_table('request')
    op.drop_table('measures')
    op.drop_table('user')
    op.drop_table('exercise')
    # ### end Alembic commands ###
