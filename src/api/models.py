from flask_sqlalchemy import SQLAlchemy
from enum import Enum
db = SQLAlchemy()

class Rol(Enum):
    general="general"
    entrenador="entrenador"
    nutricionista="nutricionista"
    fisioterapeuta="fisioterapeuta"
    admin="admin"

class Status(Enum):
    waiting="waiting"
    refused="refused"
    approved="approved"
    none="none"

class MuscleGroup(Enum):
    biceps="biceps"
    triceps="triceps"
    quadriceps="cuadriceps"
    back="espalda"
    femoral="femoral"
    chest="pecho"
    shoulder="hombro"
    forearm="antebrazo"
    calf="pantorrilla"
    gluteus="gluteo"
    abdominal="abdominal"

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    firstName = db.Column(db.String(40), nullable=False)
    lastName = db.Column(db.String(50), nullable=False)
    birthDate = db.Column(db.Date())
    email = db.Column(db.String(120), unique=True, nullable=False)
    username = db.Column(db.String(20), unique=True,nullable=False)
    password = db.Column(db.String(255), unique=False, nullable=False)
    salt = db.Column(db.String(180))
    rol = db.Column(db.Enum(Rol), default="general")
    avatar = db.Column(db.String(180))
    is_active = db.Column(db.Boolean(), nullable=False, default=True)
    create_at = db.Column(db.DateTime(timezone=True), default=db.func.now(), nullable=False)
    update_at = db.Column(db.DateTime(timezone=True), default=db.func.now(),onupdate=db.func.now(), nullable=False)

    measures = db.relationship('Measures',uselist=False, back_populates='user')
    social = db.relationship('Social', uselist=False, back_populates='user')
    request = db.relationship('Request', uselist=False, back_populates='user')

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        measures_data = {}
        social_data={}
        status_data={}

        if self.measures:
            try:
                measures_data = self.measures.serialize()
            except (AttributeError, TypeError):  
                print("Error serializing measures:", self.measures)
                

        if self.social:
            try:
                social_data = self.social.serialize() 
            except (AttributeError, TypeError):
                print("Error serializing measures:", self.social_data)

        if self.request:
            try:
                status_data = self.request.serialize() 
            except (AttributeError, TypeError):
                print("Error serializing measures:", self.status_data)

        return {
            "id": self.id,
            "email": self.email,
            "firstName":self.firstName,
            "lastName":self.lastName,
            "username":self.username,
            "birthDate":self.birthDate,
            "rol":self.rol.value,
            "avatar":self.avatar,
            "measures":measures_data,
            "social":social_data,
            "request":status_data
            # do not serialize the password, its a security breach
        }
    
    def serialize_two(self):
        return{
            "id":self.id,
            "request":self.request.serialize()
        }

    
class Measures(db.Model):
    id = db.Column(db.Integer,primary_key=True)
    weight=db.Column(db.Float)
    height=db.Column(db.Integer)
    biceps=db.Column(db.Float)
    waist=db.Column(db.Float)

    user_id = db.Column(db.Integer,db.ForeignKey('user.id'), nullable=False)
    user = db.relationship('User', back_populates='measures')
    
    def serialize(self):
        return{
            "weight":self.weight,
            "height":self.height,
            "biceps":self.biceps,
            "waist":self.waist
        }
    
    
class Social(db.Model):
    id = db.Column(db.Integer,primary_key=True)
    instagram = db.Column(db.String(30))
    facebook = db.Column(db.String(30))
    twitter = db.Column(db.String(30))

    user_id = db.Column(db.Integer,db.ForeignKey('user.id'), nullable=False)
    user = db.relationship('User', back_populates='social')

    def serialize(self):
        return{
            "instagram":self.instagram,
            "facebook":self.facebook,
            "twitter":self.twitter
        }
    
class Request(db.Model):
    id = db.Column(db.Integer,primary_key=True)
    telephone =db.Column(db.String(16))
    linkedin = db.Column(db.String(100))
    profession = db.Column(db.String(20))
    status = db.Column(db.Enum(Status))

    user_id = db.Column(db.Integer,db.ForeignKey('user.id'), nullable=False)
    user = db.relationship('User', back_populates='request')

    def serialize(self):
        return{
            "id":self.id,
            "telephone":self.telephone,
            "linkedin":self.linkedin,
            "profession":self.profession,
            "status":self.status.value,
            "user_id":self.user_id
            # "user":self.user.serialize()
        }
    
    def serialize_status(self):
        return{
            "status":self.status.value
        }
    
class Exercise(db.Model):
    id = db.Column(db.Integer,primary_key=True)
    url = db.Column(db.String(200),unique=True,nullable=False)
    name = db.Column(db.String(50),nullable=False)
    description= db.Column(db.String(100))
    muscle_group = db.Column(db.Enum(MuscleGroup),nullable=False)

    def serialize(self):
        return{
            "id":self.id,
            "name":self.name,
            "url":self.url,
            "description":self.description,
            "muscle_group":self.muscle_group.value
        }

