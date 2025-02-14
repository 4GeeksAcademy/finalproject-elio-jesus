"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User,Measures,Social,Request,Exercise
from api.utils import generate_sitemap, APIException,sendEmail
from flask_cors import CORS
import os
from base64 import b64encode
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import timedelta
import cloudinary.uploader as uploader 

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

expire_in_minute = 10
expire_delta = timedelta(minutes=expire_in_minute)


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
        body_form = request.form
        body_files = request.files
        firstName = body_form.get('firstName')
        lastName = body_form.get('lastName')
        username = body_form.get('username')
        birthDate = body_form.get('birthDate')
        avatar = body_files.get('avatar')
        user_id = get_jwt_identity()

        if firstName is None or lastName is None or username is None:
            return jsonify('No pueden quedar campos vacios'), 400
        else:
            avatar = uploader.upload(avatar)
            avatar = avatar.get('secure_url')

            user = User.query.filter_by(id=user_id).first()
            user.firstName = firstName
            user.lastName = lastName
            user.username = username
            user.birthDate = birthDate
            user.avatar = avatar
            
            try:
                db.session.commit()
                return jsonify({"currentUser":user.serialize()}),200
            except Exception as error:
                return jsonify({'error': str(error)}),500
            
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
                return jsonify("Guardado"),200     
            except Exception as err:
                return jsonify({'error': str(err)}),500
    
    except Exception as err:
        return jsonify({'error': str(err)}),500
    
@api.route('/updateMeasures', methods=['PUT'])
@jwt_required()
def updateMeasures():
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
            measure = Measures.query.filter_by(user_id=user_id).first()
            measure.weight = weight
            measure.height = height
            measure.biceps = biceps
            measure.waist = waist
            measure.user_id = user_id
            try:
                db.session.commit()
                return jsonify("Editado"),200    
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
    
@api.route('/getUser2', methods=['POST'])
@jwt_required()
def getUser2():
    try:
        body = request.json
        user_id = body
        user = User.query.filter_by(id=user_id).first()
        return jsonify({"currentUser":user.serialize()}),200

    except Exception as error:
        return jsonify({'error': str(error)})

@api.route('/getUsersForRol', methods=['GET'])
def getUsersForRol():
    try:
        rol = request.args.get('rol')  # Usa request.args para obtener el parámetro de la URL
        if not rol:
            return jsonify({"error": "El parámetro 'rol' es requerido"}), 400

        users = User.query.filter_by(rol=rol).all()
        return jsonify({"users": [user.serialize() for user in users]})
    except Exception as error:
        return jsonify({'error': str(error)}), 500
    
@api.route('/saveSocial', methods=['POST'])
@jwt_required()
def saveSocial():
    try:
        body = request.json
        instagram = body.get('instagram')
        facebook = body.get('facebook')
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
    
@api.route('/updateSocial', methods=['PUT'])
@jwt_required()
def updateSocial():
    try:
        body = request.json
        instagram = body.get('instagram')
        facebook = body.get('facebook')
        twitter = body.get('twitter')
        user_id = get_jwt_identity()

        if instagram is None and facebook is None and twitter is None:
            return jsonify("No pueden estar todos los campos vacios")
        else:
            social = Social.query.filter_by(user_id=user_id).first()
            social.instagram=instagram
            social.facebook=facebook
            social.twitter=twitter
            social.user_id=user_id
            
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
 
@api.route("/updateStatus",methods=['PUT'])
@jwt_required()
def updateStatus():
    try:
        body = request.json
        id = body.get('id')
        status = body.get('status')


        peticion = Request.query.filter_by(id=id).first()
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

@api.route('/activateUser/<int:user_id>', methods=['PUT'])
@jwt_required()
def activateUser(user_id):
    try:
        user = User.query.get(user_id)
        if user is None:
            return jsonify({"message": "Usuario no encontrado"}), 404
        user.is_active = True  
        db.session.commit()
        return jsonify({"message": "Usuario activado"}), 200
    except Exception as error:
        return jsonify({'error': str(error)}), 500

@api.route('/deactivateUser/<int:user_id>', methods=['PUT'])
@jwt_required()
def deactivateUser(user_id):
    try:
        user = User.query.get(user_id)
        if user is None:
            return jsonify({"message": "Usuario no encontrado"}), 404
        user.is_active = False 
        db.session.commit()
        return jsonify({"message": "Usuario desactivado"}), 200
    except Exception as error:
        return jsonify({'error': str(error)}), 500

@api.route("/saveExercise", methods=['POST'])
@jwt_required()
def saveExercise():
    try:
        body = request.json
        url = body.get('url')
        name = body.get('name')
        description = body.get('description')
        muscle_group = body.get('muscle_group')

        if url is None or name is None or description is None or muscle_group is None:
            return jsonify('Todos los campos son obligatorios'), 400
        else:
            exercise = Exercise(
                url=url,
                name=name,
                description=description,
                muscle_group=muscle_group
            )
            db.session.add(exercise)
            db.session.commit()
            return jsonify('Guardado con exito'), 200
    except Exception as error:
        return jsonify({'error': str(error)}), 500

@api.route('/getExercisesGroup/<muscle_group>', methods=['GET'])
@jwt_required()
def getExercise(muscle_group):
    try:
        if not muscle_group:
            return jsonify('Necesitamos que especifiques el grupo muscular'), 400
        else:
            exercises = Exercise.query.filter_by(muscle_group=muscle_group).all()
            return jsonify({"exercises": [exercise.serialize() for exercise in exercises]}), 200
    except Exception as error:
        return jsonify({'error': str(error)}), 500

@api.route('/reset_password', methods=["POST"])
def reset_password():
    try:
        body = request.json
        email = body.get('email')

        user = User.query.filter_by(email=email).first()
        if user is None:
            return jsonify('Este email no existe'),404
        else:
            recovery_token = create_access_token(identity=str(email), expires_delta=expire_delta)
            message = f"""
                        <h1>Se solicito recuperar la contraseña</h1>
                        <br></br>
                        <h3>Mediante este link puedes recuperar la contraseña</h3>
                        <a href="https://curly-bassoon-g459j44vxp4p2wxvp-3000.app.github.dev/update_password?token={recovery_token}">LINK PARA RECUPERAR CONTRASEÑA</a>
                    """
            sendEmail("Privado",body.get('email'),message)  
        return jsonify("Enviado exitosamente"),200
    except Exception as error:
        return jsonify({'error': str(error)}),500
    
@api.route('/update_password', methods=['PUT'])
@jwt_required()
def updatePassword():
    try:
        email = get_jwt_identity()
        body = request.json
        password = body.get('password1')
        user = User.query.filter_by(email=email).first()

        salt = b64encode(os.urandom(32)).decode('utf-8')
        password = generate_password_hash(f'{password}{salt}')

        user.salt = salt
        user.password = password 
        try:
            db.session.commit()
            return jsonify('Clave Actualizada'),200
        except Exception as error:
            return jsonify({'error': str(error)}),500

    except Exception as error:
        return jsonify({'error': str(error)}),500
    
@api.route('/getAlluserRequest', methods=["GET"])
@jwt_required()
def getAlluserRequest():
    try:
        solicitudes = Request.query.all()
        # user = User.query.all()
        return jsonify({"solicitudes":[solicitud.serialize() for solicitud in solicitudes]})
        # print(user)
        # return jsonify({"solicitudes":[user.serialize() for user in user]})
    except Exception as error:
        return jsonify({'error': str(error)}),500

@api.route('/updateRol', methods=['PUT'])
@jwt_required()
def updateRol():
    try:
        rol = request.json
        user_id = get_jwt_identity()
        
        if rol is None:
            return jsonify("Se necesita un rol"),400
        else:
            user = User.query.filter_by(id=user_id).first()
            user.rol = rol
            db.session.commit()
            return jsonify("Rol actualizado"),200
    except Exception as error:
        return jsonify({'error': str(error)}),500
    
@api.route('/getApprovedTrainers', methods=['GET'])
@jwt_required()
def get_approved_trainers():
    try:
        # Filtra usuarios por rol "entrenador" y estado "approved"
        trainers = User.query.filter_by(rol="entrenador").join(Request).filter(Request.status == "approved").all()
        return jsonify({"trainers": [trainer.serialize() for trainer in trainers]}), 200
    except Exception as error:
        return jsonify({'error': str(error)}), 500