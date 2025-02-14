import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/exercises.css";

export const BackExercises = () => {
    const { actions } = useContext(Context);
    const [backExercises, setBackExercises] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBackExercises = async () => {
            try {
                const exercises = await actions.getExercisesGroup('back');
                if (exercises instanceof Array) {
                    setBackExercises(exercises);
                } else if (exercises.error) {
                    throw new Error(exercises.error);
                } else {
                    throw new Error('Error al obtener ejercicios para la espalda');
                }
            } catch (error) {
                console.error("Error al obtener los ejercicios:", error);
                setError(error.message);
            }
        };

        fetchBackExercises();
    }, [actions]);

    return (
        <div className="container">
           
            {error ? (
                <p className="text-danger">{error}</p>
            ) : (
                backExercises.map(exercise => (
                    <div className="row borde border border-success mt-3" key={exercise.id}>
                        <div className="col-6 justify-content-center">
                            <h2 className="fw-bold mt-4 pb-3">{exercise.name}</h2>
                            <p className="mt-5">{exercise.description}</p>
                        </div>
                        <div className="col-6 mt-2 mb-2 d-flex justify-content-end">
                            <iframe
                                src={exercise.url}
                                className="videos borde border"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title={exercise.name}
                            />
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};


