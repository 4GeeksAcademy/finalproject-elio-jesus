import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/exercises.css";

export const ShouldersExercises = () => {
    const { actions } = useContext(Context);
    const [shoulderExercises, setShoulderExercises] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchShoulderExercises = async () => {
            try {
                const exercises = await actions.getExercisesGroup('shoulder');
                if (exercises instanceof Array) {
                    setShoulderExercises(exercises);
                } else if (exercises.error) {
                    throw new Error(exercises.error);
                } else {
                    throw new Error('Error al obtener ejercicios para los hombros');
                }
            } catch (error) {
                console.error("Error al obtener los ejercicios:", error);
                setError(error.message);
            }
        };

        fetchShoulderExercises();
    }, [actions]);

    return (
        <div className="container prueba">
            
            {error ? (
                <p className="text-danger">{error}</p>
            ) : (
                shoulderExercises.map(exercise => (
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


