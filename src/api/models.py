from flask_sqlalchemy import SQLAlchemy
from enum import Enum
db = SQLAlchemy()

class Rol(Enum):
    usuario="user"
    entrenador="trainer"
    nutricionista="nutritionist"
    fisioterapeuta="physiotherapist"

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    firstName = db.Column(db.String(40), nullable=False)
    lastName = db.Column(db.String(50), nullable=False)
    birthDate = db.Column(db.Date())
    email = db.Column(db.String(120), unique=True, nullable=False)
    username = db.Column(db.String(20), unique=True,nullable=False)
    password = db.Column(db.String(255), unique=False, nullable=False)
    salt = db.Column(db.String(180))
    rol = db.Column(db.Enum(Rol))
    is_active = db.Column(db.Boolean(), nullable=False, default=False)
    create_at = db.Column(db.DateTime(timezone=True), default=db.func.now(), nullable=False)
    update_at = db.Column(db.DateTime(timezone=True), default=db.func.now(),onupdate=db.func.now(), nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "firstName":self.firstName,
            "username":self.username
            # do not serialize the password, its a security breach
        }