import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Trainer = () => {
    const { store, actions } = useContext(Context); // Acceder al contexto
    const [trainers, setTrainers] = useState([]); // Estado local para almacenar los entrenadores

    // Efecto para cargar los entrenadores al montar el componente
    useEffect(() => {
        if (store.trainers) { // Verifica si hay entrenadores en el store
            setTrainers(store.trainers); // Actualiza el estado local con los entrenadores
        }
    }, [store.trainers]); // Dependencia: cuando cambien los entrenadores en el store

    return (
        <div className="container">
            
            <h2>Lista de Entrenadores</h2>
            <ul>
                {trainers.map((trainer, index) => (
                    <li key={index}>
                        {trainer.name} - {trainer.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

