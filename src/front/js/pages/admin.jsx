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

    // const navigate = useNavigate();

    // useEffect(() => { !store.token ? navigate("/login") : null }, [store.token]);

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
    
    return (
        // store.token &&
        <div className="container-fluid p-0">
            <div className="container-fluid  bg-dark">
                <div className="container ">
                    <div className="py-3">
                    <h1 className="text ps-5"> {store.currentUser['firstName']}</h1>
                        
                    </div>
                </div>
            </div>
            
            <div className="container mb-2">
                <div className="row  mt-2 ">
                    <div className="col-12 col-md-6 mt-8">
                        <div className="border border-3 rounded-3 p-5">
                            <div className="d-flex justify-content-between align-items-center">
                                <h3>Detalles de administrador</h3>
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
                                        <option value="backExercises">Chest Exercises</option>
                                        <option value="backExercises">Back Exercises</option>
                                        <option value="legExercises">Leg Exercises</option>
                                        <option value="armExercises">Arms Exercises</option>
                                        <option value="armExercises">Abdomen Exercises</option>
                                        <option value="armExercises">Shoulders Exercises</option>
                                    </select>
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
