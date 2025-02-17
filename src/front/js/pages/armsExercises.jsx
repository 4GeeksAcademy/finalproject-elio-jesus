import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/exercises.css";

export const ArmsExercises = () => {
    const { actions } = useContext(Context);
    const [bicepsExercises, setBicepsExercises] = useState([]);
    const [tricepsExercises, setTricepsExercises] = useState([]);
    const [forearmExercises, setForearmExercises] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBicepsExercises = async () => {
            try {
                const exercises = await actions.getExercisesGroup('biceps');
                if (exercises instanceof Array) {
                    setBicepsExercises(exercises);
                } else if (exercises.error) {
                    throw new Error(exercises.error);
                } else {
                    throw new Error('Error al obtener ejercicios para biceps');
                }
            } catch (error) {
                console.error("Error al obtener los ejercicios:", error);
                setError(error.message);
            }
        };

        fetchBicepsExercises();
    }, [actions]);

    useEffect(() => {
        const fetchTricepsExercises = async () => {
            try {
                const exercises = await actions.getExercisesGroup('triceps');
                if (exercises instanceof Array) {
                    setTricepsExercises(exercises);
                } else if (exercises.error) {
                    throw new Error(exercises.error);
                } else {
                    throw new Error('Error al obtener ejercicios para triceps');
                }
            } catch (error) {
                console.error("Error al obtener los ejercicios:", error);
                setError(error.message);
            }
        };

        fetchTricepsExercises();
    }, [actions]);

    useEffect(() => {
        const fetchForearmExercises = async () => {
            try {
                const exercises = await actions.getExercisesGroup('forearm');
                if (exercises instanceof Array) {
                    setForearmExercises(exercises);
                } else if (exercises.error) {
                    throw new Error(exercises.error);
                } else {
                    throw new Error('Error al obtener ejercicios para antebrazo');
                }
            } catch (error) {
                console.error("Error al obtener los ejercicios:", error);
                setError(error.message);
            }
        };

        fetchForearmExercises();
    }, [actions]);

    return (
        <div className="container prueba">

            {error ? (
                <p className="text-danger">{error}</p>
            ) : (
                <>
                    <div className="container width-exercise">
                        <h2 className="text-center mt-3">Biceps</h2>
                        {bicepsExercises.map(exercise => (
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
                        ))}
                    </div>
                    <div className="container width-exercise">
                            <h2 className="text-center mt-3">Triceps</h2>
                            {tricepsExercises.map(exercise => (
                                <div className="row borde border border-success mt-3" key={exercise.id}>
                                    <div className="col-6">
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
                        ))}
                    </div>
                    <div className="container width-exercise">
                        <h2 className="text-center mt-3">Antebrazo</h2>
                        {forearmExercises.map(exercise => (
                            <div className="row borde border border-success mt-3" key={exercise.id}>
                                <div className="col-6">
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
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};


