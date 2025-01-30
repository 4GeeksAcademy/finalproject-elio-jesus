import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/admin.css";

export const Admin = () => {
    const { store, actions } = useContext(Context);
    const [newExercise, setNewExercise] = useState({
        nombre: '',
        descripcion: '',
        video: '',
        categoria: ''
    });
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewExercise(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        actions.addExercise(newExercise);
        setNewExercise({ nombre: '', descripcion: '', video: '', categoria: '' });
    }

    const fetchUsers = async () => {
        try {
            const response = await fetch(process.env.BACKEND_URL + "/getUsers", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${store.token}`
                }
            });
            const data = await response.json();

            if (response.ok) {
                setUsers(data.users);
            } else {
                setError(data.error || 'Error al obtener los usuarios');
            }
        } catch (error) {
            setError('Error al conectar con el servidor');
            console.error(error);
        }
    };

    useEffect(() => {
        fetchUsers(); // Llamada a fetchUsers al montar el componente
    }, []);

    return (
        <>
            <div className="container d-flex justify-content-center mt-5">
                <ul className="nav nav-pills mb-3"
                    id="pills-tab"
                    role="tablist"
                >
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active"
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
                        <button className="nav-link"
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
                        <button className="nav-link"
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
                            {error ? (
                                <p className="text-danger">{error}</p>
                            ) : (
                                <ul>
                                    {users && users.map((user, index) => (
                                        <li key={index}>
                                            <p className="fs-6">id: {user.id} Nombre: {user.firstName} {user.lastName} Correo: {user.email} </p>


                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                    </div>
                </div>

                <div className="tab-pane fade" id="pills-ejercicios" role="tabpanel" aria-labelledby="pills-ejercicios-tab">
                    <div className="col-12 col-md-6">
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
                                        name="nombre"
                                        value={newExercise.nombre}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fs-5 fw-bolder data-text">Descripción</label>
                                    <textarea
                                        className="form-control"
                                        name="descripcion"
                                        value={newExercise.descripcion}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fs-5 fw-bolder data-text">Video URL</label>
                                    <input
                                        type="url"
                                        className="form-control"
                                        name="video"
                                        value={newExercise.video}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fs-5 fw-bolder data-text">Categoría</label>
                                    <select
                                        className="form-select"
                                        name="categoria"
                                        value={newExercise.categoria}
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
                                <button type="submit" className="btn btn-primary">Agregar Ejercicio</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
