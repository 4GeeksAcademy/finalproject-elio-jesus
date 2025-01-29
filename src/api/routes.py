"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User,Measures,Social,Request
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
import os
from base64 import b64encode
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from werkzeug.security import generate_password_hash, check_password_hash

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/register', methods=['POST'])
def register():
    try:
        body = request.json
        firstName = body.get('firstName')
        lastName = body.get('lastName')
        email = body.get('email')
        username = body.get('username')
        password = body.get('password')
        rol = "general"
        if email=="elio@gmail.com":
            rol="admin"

        if firstName is None or lastName is None or email is None or username is None or password is None:
            return jsonify('Se requieren todos los campos para el registro'), 400
        else:
            user = User()
            user_exist = user.query.filter_by(email=email).first()

            if user_exist is not None:
                return jsonify('El usuario ya existe'),400
            
            salt = b64encode(os.urandom(32)).decode('utf-8')
            password = generate_password_hash(f'{password}{salt}')

            user.firstName = firstName
            user.lastName = lastName
            user.username = username
            user.email = email
            user.password = password
            user.salt = salt
            user.rol = rol
            db.session.add(user)

            try:
                db.session.commit()
                return jsonify("Creado con exito"),201
            except Exception as err:
                return jsonify({'error': str(err)}),500

    except Exception as err:
        return jsonify({'error': str(err)}),500
    
@api.route('/login', methods=['POST'])
def login():
    try:
        body = request.json
        username = body.get('username')
        password = body.get('password')

        if username is None or password is None:
            return jsonify('Todos los campos son requeridos'),400
        else:
            user = User().query.filter_by(username=username).first()
            
            if user is None:
                return jsonify('No encontrado el usuario'),404
            else:
                if check_password_hash(user.password,f'{password}{user.salt}'):
                    token=create_access_token(identity=str(user.id))
                    return jsonify({"token":token,"currentUser":user.serialize()}),200
                else:
                    return jsonify("Credenciales invalidas"),401
                
    except Exception as err:
        return jsonify({'error': str(err)}),500

@api.route('/updateContact', methods=["PUT"])
@jwt_required()
def updateContact():
    try:
        body = request.json
        firstName = body.get('firstName')
        lastName = body.get('lastName')
        username = body.get('username')
        birthDate = body.get('birthDate')
        user_id = get_jwt_identity()

        if firstName is None or lastName is None or username is None:
            return jsonify('No pueden quedar campos vacios'), 400
        else:
            user = User.query.filter_by(id=user_id).first()
            user.firstName = firstName
            user.lastName = lastName
            user.username = username
            user.birthDate = birthDate
            db.session.commit()
            return jsonify({"currentUser":user.serialize()}),200
            
    except Exception as error:
        return jsonify({'error': str(error)}),500
    
@api.route('/saveMeasures', methods=['POST'])
@jwt_required()
def saveMeasures():
    try:
        body = request.json
        weight = body.get('weight')
        height = body.get('height')
        biceps = body.get('biceps')
        waist = body.get('waist')
        user_id = get_jwt_identity()

        if weight is None or height is None or biceps is None or waist is None:
            return jsonify('No se pueden guardar campos vacios'), 400
        else:
            measure = Measures()
            measure.weight = weight
            measure.height = height
            measure.biceps = biceps
            measure.waist = waist
            measure.user_id = user_id
            db.session.add(measure)
            try:
                db.session.commit()
                return jsonify("Guardado"),201     
            except Exception as err:
                return jsonify({'error': str(err)}),500
    
    except Exception as err:
        return jsonify({'error': str(err)}),500
    
@api.route('/getUser', methods=['GET'])
@jwt_required()
def getUser():
    try:
        user_id = get_jwt_identity()
        user = User.query.filter_by(id=user_id).first()
        return jsonify({"currentUser":user.serialize()}),200

    except Exception as error:
        return jsonify({'error': str(error)})
    
@api.route('/saveSocial', methods=['POST'])
@jwt_required()
def saveSocial():
    try:
        body = request.json
        instagram = body.get('ig')
        facebook = body.get('face')
        twitter = body.get('twitter')
        user_id = get_jwt_identity()

        if instagram is None and facebook is None and twitter is None:
            return jsonify("No pueden estar todos los campos vacios")
        else:
            social = Social()
            social.instagram=instagram
            social.facebook=facebook
            social.twitter=twitter
            social.user_id=user_id
            db.session.add(social)
            
            try:
                db.session.commit()
                return jsonify('Guardado exitosamente'),200
            except Exception as error:
                return jsonify({'error': str(error)}),500
    except Exception as error:
        return jsonify({'error': str(error)}),500
    
@api.route('/saveRequest',methods=['POST'])
@jwt_required()
def saveRequest():
    try:
        body = request.json
        telephone = body.get('telephone')
        linkedin = body.get('linkedin')
        profession = body.get('profession')
        user_id = get_jwt_identity()

        if telephone is None and linkedin is None and profession is None:
            return jsonify('No pueden estar todos los campos vacios')
        else:
            data = Request()
            data.telephone=telephone
            data.linkedin=linkedin
            data.status="waiting"
            data.profession=profession
            data.user_id=user_id
            db.session.add(data)
            try:
                db.session.commit()
                return jsonify("Guardado exitosamente"),200
            except Exception as error:
                return jsonify({'error': str(error)}),500
            
    except Exception as error:
        return jsonify({'error': str(error)}),500
    
# @api.route('/getStatus', methods=['GET'])
# @jwt_required()
# def getStatus():
#     try:
#         user_id = get_jwt_identity()
#         status = Request.query.filter_by(user_id=user_id).first()
#         return jsonify({"status":status.serialize_status()}),200

#     except Exception as error:
#         return jsonify({'error': str(error)})
    
@api.route("/updateStatus",methods=['PUT'])
@jwt_required()
def updateStatus():
    try:
        body = request.json
        status = body.get('status')
        user_id = get_jwt_identity()

        peticion = Request.query.filter_by(user_id=user_id).first()
        peticion.status = status
        db.session.commit()
        return jsonify("Editado el estatus"),200
    except Exception as error:
       return jsonify({'error': str(error)})
    
@api.route('/getUsers', methods=['GET'])
@jwt_required()
def getUsers():
    try:
        users = User.query.all()
        return jsonify({"users": [user.serialize() for user in users]}), 200
    except Exception as error:
        return jsonify({'error': str(error)}), 500
