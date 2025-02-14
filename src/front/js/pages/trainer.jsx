import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Trainer = () => {
    const { store, actions } = useContext(Context);
    const [trainers, setTrainers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchApprovedTrainers = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${process.env.BACKEND_URL}/getApprovedTrainers`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${store.token}`
                }
            });

            if (!response.ok) {
                throw new Error("Error al obtener los entrenadores aprobados");
            }

            const data = await response.json();
            setTrainers(data.trainers);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (store.token) {
            fetchApprovedTrainers();
        } else {
            setError("No estás autenticado. Por favor, inicia sesión.");
            setLoading(false);
        }
    }, [store.token]);

    if (loading) return <div>Cargando entrenadores...</div>;
    if (error) return <div>Error: {error}</div>;
    if (trainers.length === 0) return <div>No hay entrenadores aprobados disponibles.</div>;

    return (
        <div className="container">
            <h2>Entrenadores</h2>
            <ul>
                {trainers.map((trainer, index) => (
                    <li key={index}>
                        {trainer.firstName} {trainer.lastName} - {trainer.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};