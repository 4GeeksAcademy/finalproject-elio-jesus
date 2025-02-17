import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/admin.css";

export const Administrator = () => {
    const { store, actions } = useContext(Context);
    const [newExercise, setNewExercise] = useState({
        name: '',
        description: '',
        url: '',
        muscle_group: ''
    });
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [send, setSend] = useState(false)
    const [selectedUser, setSelectedUser] = useState(null);
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewExercise(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!newExercise.name || !newExercise.description || !newExercise.url || !newExercise.muscle_group ){
            setError('Todos los campos son obligatorios')
        }else{
            const response = await actions.addExercise(newExercise);
            if(response==200){
                setSend(true)
                setNewExercise({ name: '', description: '', url: '', muscle_group: '' });
                setTimeout(() => {
                    setSend(false);
                }, 2000);
            }else{
                setError('Error')
            }
        }
    }

    const fetchUsers = async () => {
        try {
            setLoading(true); // Empieza la carga
            const response = await fetch(process.env.BACKEND_URL + "/getUsers", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${store.token}`
                }
            });
            const data = await response.json();

            if (response.ok) {
                // Suponemos que todos los usuarios vienen activos por defecto
                const usersWithDefaults = data.users.map(user => ({
                    ...user,
                    is_active: user.is_active ?? true // Asumimos que es activo si is_active es undefined
                }));
                setUsers(usersWithDefaults);
            } else {
                setError(data.error || 'Error al obtener los usuarios');
            }
        } catch (error) {
            setError('Error al conectar con el servidor');
            console.error(error);
        } finally {
            setLoading(false); // Termina la carga
        }
    };


    const usersRequest = async () => {
        const response = await actions.getAlluserRequest()
    }

    const toggleUserActivation = async (userId, isActive) => {
        try {
            const endpoint = isActive ? 'deactivateUser' : 'activateUser';
            const response = await fetch(`${process.env.BACKEND_URL}/${endpoint}/${userId}`, {
                method: 'PUT',
                headers: {
                    "Authorization": `Bearer ${store.token}`
                }
            });
            if (response.ok) {
                setUsers(prevUsers =>
                    prevUsers.map(user =>
                        user.id === userId ? { ...user, is_active: !isActive } : user
                    )
                );
            } else {
                console.error(`Error ${isActive ? 'desactivando' : 'activando'} usuario`);
            }
        } catch (error) {
            console.error(`Error ${isActive ? 'desactivando' : 'activando'} usuario`, error);
        }
    };

    const showUserDetails = (user) => {
        setSelectedUser(user);
    }

    const closeModal = () => {
        setSelectedUser(null);
    }

    const changeStatus = async (status) => {
        const response = await actions.updateStatus(status)
    }

    const getInfo = async (user_id) =>{
        const response = await actions.getUser2(user_id)
        console.log(response)
    }

    useEffect(()=>{store.currentUser["rol"]!="admin"? navigate('/'):null},[])
    useEffect(() => {
        usersRequest()
        fetchUsers()
    }, [])

    return (
        <>
            <div className="container d-flex justify-content-center mt-5">
                <ul className="nav nav-pills mb-3"
                    id="pills-tab"
                    role="tablist"
                >
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active bg-dark text-light me-2"
                            id="pills-home-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-home"
                            type="button"
                            role="tab"
                            aria-controls="pills-home"
                            aria-selected="true"
                        >Home
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link bg-dark text-light me-2"
                            id="pills-usuarios-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-usuarios"
                            type="button"
                            role="tab"
                            aria-controls="pills-usuarios"
                            aria-selected="false"
                        >Usuarios
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link bg-dark text-light me-2"
                            id="pills-ejercicios-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-solicitudes"
                            type="button"
                            role="tab"
                            aria-controls="pills-solicitudes"
                            aria-selected="false"
                        >Solicitudes
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link bg-dark text-light"
                            id="pills-ejercicios-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-ejercicios"
                            type="button"
                            role="tab"
                            aria-controls="pills-ejercicios"
                            aria-selected="false"
                        >Ejercicios
                        </button>
                    </li>
                </ul>
            </div>

            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active "
                    id="pills-home" role="tabpanel"
                    aria-labelledby="pills-home-tab"
                >
                    <div className="container d-flex justify-content-center mt-5 ">
                        <div className="border border-3 rounded-3 p-5">
                            <div className="d-flex justify-content-between align-items-center">
                                <h3 className="me-5">Detalles de administrador</h3>
                                <Link to="/edit_profile">
                                    Editar Información
                                </Link>
                            </div>
                            <p className="fs-5 fw-bolder data-text">Correo</p>
                            <p className="fs-6">{store.currentUser['email']}</p>
                            <p className="fs-5 fw-bolder data-text">Nombre</p>
                            <p className="fs-6">{store.currentUser['firstName']} {store.currentUser['lastName']}</p>
                            <p className="fs-5 fw-bolder data-text">Cumpleaños</p>
                            <p className="fs-6">{!store.currentUser['birthDate'] ? "No cargado" : store.currentUser['birthDate']}</p>
                        </div>



                    </div>
                </div>
                <div className="tab-pane fade"
                    id="pills-usuarios"
                    role="tabpanel"
                    aria-labelledby="pills-usuarios-tab"
                >
                    <div className="container pb-5">
                        <div className="border border-3 rounded-3 p-5">
                            <div className="d-flex justify-content-between align-items-center">
                                <h3>Usuarios</h3>
                            </div>
                            {loading ? (
                                <p>Cargando usuarios...</p>
                            ) : error ? (
                                <p className="text-danger">{error}</p>
                            ) : (
                                <ul>
                                    {users && users.map((user, index) => (
                                        <li key={index} className="d-flex justify-content-between align-items-center">
                                            <div className="container">
                                                <p className="fs-6">id: {user.id}, {user.firstName} {user.lastName}</p>
                                            </div>
                                            <div className="container d-flex justify-content-end mb-2 ">
                                                <button
                                                    className={`btn ${user.is_active ? 'btn-danger' : 'boton1'}`}
                                                    onClick={() => toggleUserActivation(user.id, user.is_active)}
                                                >
                                                    {user.is_active ? 'Desactivar' : 'Activar'}
                                                </button>
                                                <button
                                                    className="btn btn-secondary ms-2"
                                                    onClick={() => showUserDetails(user)}
                                                >
                                                    Ver Info
                                                </button>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                    {selectedUser && (
                        <div className="modal show d-block" tabIndex="-1" role="dialog">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Detalles del Usuario</h5>
                                        <button type="button" className="close" onClick={closeModal}>
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <p><strong>ID:</strong> {selectedUser.id}</p>
                                        <p><strong>Nombre:</strong> {selectedUser.firstName} {selectedUser.lastName}</p>
                                        <p><strong>Correo:</strong> {selectedUser.email}</p>
                                        <p><strong>Cumpleaños:</strong> {!selectedUser.birthDate ? "No cargado" : selectedUser.birthDate}</p>
                                        <p><strong>Username:</strong> {!selectedUser.username ? "No cargado" : selectedUser.username}</p>
                                        <p><strong>Rol:</strong> {selectedUser.rol}</p>
                                        <p><strong>Fecha de Creación:</strong> {selectedUser.salt}</p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" onClick={closeModal}>Cerrar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>

                <div className="tab-pane fade"
                    id="pills-solicitudes"
                    role="tabpanel"
                    aria-labelledby="pills-solicitudes-tab"
                >
                    <div className="container pb-5">
                        <div className="border border-3 rounded-3 p-5">
                            <div className="d-flex justify-content-between align-items-center">
                                <h3>Solicitudes</h3>
                            </div>
                            {loading ? (
                                <p>Cargando usuarios...</p>
                            ) : error ? (
                                <p className="text-danger">{error}</p>
                            ) : (
                                <ul>
                                    {store?.usersRequest.map((user, index) => (
                                        <li key={index} className="d-flex justify-content-between align-items-center">
                                            <div className="container">
                                                <p className="fs-6">id: {user.id}, {user.telephone} {user.profession}</p>
                                            </div>
                                            <div className="container d-flex justify-content-end mb-2 ">
                                                <button
                                                    className='btn boton1'
                                                    onClick={() => changeStatus(
                                                        {"id":user.id,
                                                        "status":"approved"}
                                                    )}
                                                >
                                                    Aprobar
                                                </button>
                                                <button
                                                    className="btn btn-danger ms-2"
                                                    onClick={() => changeStatus(
                                                        {"id":user.id,
                                                        "status":"refused"}
                                                    )}
                                                >
                                                    Rechazar
                                                </button>
                                                <button
                                                    className="btn btn-secondary ms-2"
                                                    onClick={()=>getInfo(user.user_id)}
                                                >
                                                    Ver Info
                                                </button>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                    {selectedUser && (
                        <div className="modal show d-block" tabIndex="-1" role="dialog">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Detalles del Usuario</h5>
                                        <button type="button" className="close" onClick={closeModal}>
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <p><strong>ID:</strong> {selectedUser.id}</p>
                                        <p><strong>Nombre:</strong> {selectedUser.firstName} {selectedUser.lastName}</p>
                                        <p><strong>Correo:</strong> {selectedUser.email}</p>
                                        <p><strong>Cumpleaños:</strong> {!selectedUser.birthDate ? "No cargado" : selectedUser.birthDate}</p>
                                        <p><strong>Username:</strong> {!selectedUser.username ? "No cargado" : selectedUser.username}</p>
                                        <p><strong>Rol:</strong> {selectedUser.rol}</p>
                                        <p><strong>Fecha de Creación:</strong> {selectedUser.salt}</p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" onClick={closeModal}>Cerrar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>

                <div className="tab-pane fade"
                    id="pills-ejercicios"
                    role="tabpanel"
                    aria-labelledby="pills-ejercicios-tab"
                >
                    <div className="container">
                        <div className="data border border-3 rounded-3 p-5">
                            <div className="d-flex justify-content-between align-items-center">
                                <h3>Agregar Ejercicio</h3>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label fs-5 fw-bolder data-text">Nombre</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={newExercise.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fs-5 fw-bolder data-text">Descripción</label>
                                    <textarea
                                        className="form-control"
                                        name="description"
                                        value={newExercise.description}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fs-5 fw-bolder data-text">Video URL</label>
                                    <input
                                        type="url"
                                        className="form-control"
                                        name="url"
                                        value={newExercise.url}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fs-5 fw-bolder data-text">Categoría</label>
                                    <select
                                        className="form-select"
                                        name="muscle_group"
                                        value={newExercise.muscle_group}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Seleccionar categoría</option>
                                        <option value="chest">Pectoral</option>
                                        <option value="back">Espalda</option>
                                        <option value="biceps">Bicep</option>
                                        <option value="triceps">Tricep</option>
                                        <option value="forearm">Antebrazo</option>
                                        <option value="quadriceps">Quadriceps</option>
                                        <option value="femoral">Femoral</option>
                                        <option value="calf">Pantorrilla</option>
                                        <option value="gluteus">Gluteos</option>
                                        <option value="abdominal">Abdominales</option>
                                        <option value="shoulder">Hombro</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn boton1">Agregar Ejercicio</button>
                            </form>
                        </div>
                        {send && <div className="alert alert-success mt-3" role="alert">
                            Guardado con exito
                        </div>}
                        {error && <div className="alert alert-danger w-50 align-self-center lign-bottom" role="alert">{error}</div>}

                    </div>
                </div>
                
            </div>
            <div style={{ height: "100px" }} ></div>
        </>
    );
};
