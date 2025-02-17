import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/trainer.css";  // Importar estilos CSS
import rigoBaby from "../../img/rigo-baby.jpg";  // Importar la imagen

export const Trainer = () => {
    const { store, actions } = useContext(Context);
    const [trainers, setTrainers] = useState([]);
    const [error, setError] = useState(null);

    const fetchApprovedTrainers = async (rol) => {
        try {
            const response = await actions.getUserForRol(rol);
            if (response && response.users) {
                setTrainers(response.users);  // Actualizar el estado con los datos
            }
        } catch (error) {
            setError(error.message);  // Manejar el error
        }
    };

    useEffect(() => {
        fetchApprovedTrainers({ "rol": "entrenador" });  // Llamar a la función al cargar el componente
    }, []);

    if (error) return <div>Error: {error}</div>;  // Mostrar mensaje de error
    if (trainers.length === 0) return <div>No hay entrenadores disponibles.</div>;  // Mostrar mensaje si no hay datos

    return (
        <div className="container">
            <h2>Entrenadores</h2>
            <div className="trainer-grid">
                {trainers.map((trainer) => (
                    <div key={trainer.id} className="trainer-card">
                        <div className="trainer-info">
                            <h3>{trainer.firstName} {trainer.lastName}</h3>
                            <p>{trainer.email}</p>
                            <div className="trainer-actions pt-3">
                                <button className="btn-details">Detalles</button>
                                <button className="btn-favorite">Agregar a favoritos</button>
                            </div>
                        </div>
                        <div className="trainer-image">
                            <img src={!store.currentUser['avatar']? `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png`:store.currentUser['avatar']} alt="Nutricionista" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};