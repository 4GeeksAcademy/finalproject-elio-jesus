import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/admin.css";

export const Admin = () => {
    const { store, actions } = useContext(Context);
    const [newExercise, setNewExercise] = useState({
        nombre: '',
        descripcion: '',
        video: ''
    });

    const navigate = useNavigate();

    useEffect(() => { !store.token ? navigate("/login") : null }, [store.token]);

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
        setNewExercise({ nombre: '', descripcion: '', video: '' });
    }

    return (
        store.token &&
        <div className="container-fluid p-0">
            <div className="container-fluid fondo">
                <div className="container">
                    <div className="row justify-content-between py-3">
                        <div className="col-12 col-md-7 d-flex align-items-end">
                            <h1 className="text ps-5">Hola desde el admin</h1>
                        </div>
                        <div className="col-12 col-md-5 text-end">
                            <img className="imagen img-thumbnail justify-content-center" src="https://i.pravatar.cc/300" alt="fotoperfil" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-md-none" ></div>
            <div className="container">
                <div className="row justify-content-between align-items-end mt-5">
                    <div className="col-12 col-md-6">
                        <div className="border border-3 rounded-3 p-5">
                            <div className="d-flex justify-content-between align-items-center">
                                <h3>Detalles de administrador</h3>
                                {/* <Link to="/edit_profile">
                                    Editar Información
                                </Link> */}
                            </div>
                            <p className="fs-5 fw-bolder data-text">Correo</p>
                            <p className="fs-6">{store.currentUser['email']}</p>
                            <p className="fs-5 fw-bolder data-text">Nombre</p>
                            <p className="fs-6">{store.currentUser['firstName']} {store.currentUser['lastName']}</p>
                            <p className="fs-5 fw-bolder data-text">Cumpleaños</p>
                            <p className="fs-6">{!store.currentUser['birthDate'] ? "No cargado" : store.currentUser['birthDate']}</p>
                        </div>
                    </div>
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
                                <button type="submit" className="btn btn-primary">Agregar Ejercicio</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
