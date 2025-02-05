import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/exercises.css";

export const LegsExercises = () => {
    const { actions } = useContext(Context);
    const [quadricepsExercises, setQuadricepsExercises] = useState([]);
    const [femoralExercises, setFemoralExercises] = useState([]);
    const [calfExercises, setCalfExercises] = useState([]);
    const [gluteusExercises, setGluteusExercises] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchQuadricepsExercises = async () => {
            try {
                const exercises = await actions.getExercisesGroup('quadriceps');
                if (exercises instanceof Array) {
                    setQuadricepsExercises(exercises);
                } else if (exercises.error) {
                    throw new Error(exercises.error);
                } else {
                    throw new Error('Error al obtener ejercicios para cuadriceps');
                }
            } catch (error) {
                console.error("Error al obtener los ejercicios:", error);
                setError(error.message);
            }
        };

        fetchQuadricepsExercises();
    }, [actions]);

    useEffect(() => {
        const fetchFemoralExercises = async () => {
            try {
                const exercises = await actions.getExercisesGroup('femoral');
                if (exercises instanceof Array) {
                    setFemoralExercises(exercises);
                } else if (exercises.error) {
                    throw new Error(exercises.error);
                } else {
                    throw new Error('Error al obtener ejercicios para femoral');
                }
            } catch (error) {
                console.error("Error al obtener los ejercicios:", error);
                setError(error.message);
            }
        };

        fetchFemoralExercises();
    }, [actions]);

    useEffect(() => {
        const fetchCalfExercises = async () => {
            try {
                const exercises = await actions.getExercisesGroup('calf');
                if (exercises instanceof Array) {
                    setCalfExercises(exercises);
                } else if (exercises.error) {
                    throw new Error(exercises.error);
                } else {
                    throw new Error('Error al obtener ejercicios para pantorrilla');
                }
            } catch (error) {
                console.error("Error al obtener los ejercicios:", error);
                setError(error.message);
            }
        };

        fetchCalfExercises();
    }, [actions]);

    useEffect(() => {
        const fetchGluteusExercises = async () => {
            try {
                const exercises = await actions.getExercisesGroup('gluteus');
                if (exercises instanceof Array) {
                    setGluteusExercises(exercises);
                } else if (exercises.error) {
                    throw new Error(exercises.error);
                } else {
                    throw new Error('Error al obtener ejercicios para glúteos');
                }
            } catch (error) {
                console.error("Error al obtener los ejercicios:", error);
                setError(error.message);
            }
        };

        fetchGluteusExercises();
    }, [actions]);

    return (
        <div className="container prueba">
            
            {error ? (
                <p className="text-danger">{error}</p>
            ) : (
                <>
                    <h2 className="text-center mt-3">Quadriceps</h2>
                    {quadricepsExercises.map(exercise => (
                        <div className="row border mt-3" key={exercise.id}>
                            <div className="col-6">
                                <h2 className="fw-bold mt-4 pb-3">{exercise.name}</h2>
                                <p className="mt-5">{exercise.description}</p>
                            </div>
                            <div className="col-6 mt-2 mb-2 d-flex justify-content-end">
                                <iframe
                                    src={exercise.url}
                                    className="videos"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title={exercise.name}
                                />
                            </div>
                        </div>
                    ))}

                    <h2 className="text-center mt-3">Femoral</h2>
                    {femoralExercises.map(exercise => (
                        <div className="row border mt-3" key={exercise.id}>
                            <div className="col-6">
                                <h2 className="fw-bold mt-4 pb-3">{exercise.name}</h2>
                                <p className="mt-5">{exercise.description}</p>
                            </div>
                            <div className="col-6 mt-2 mb-2 d-flex justify-content-end">
                                <iframe
                                    src={exercise.url}
                                    className="videos"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title={exercise.name}
                                />
                            </div>
                        </div>
                    ))}

                    <h2 className="text-center mt-3">Pantorrillas</h2>
                    {calfExercises.map(exercise => (
                        <div className="row border mt-3" key={exercise.id}>
                            <div className="col-6">
                                <h2 className="fw-bold mt-4 pb-3">{exercise.name}</h2>
                                <p className="mt-5">{exercise.description}</p>
                            </div>
                            <div className="col-6 mt-2 mb-2 d-flex justify-content-end">
                                <iframe
                                    src={exercise.url}
                                    className="videos"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title={exercise.name}
                                />
                            </div>
                        </div>
                    ))}

                    <h2 className="text-center mt-3">Glúteos</h2>
                    {gluteusExercises.map(exercise => (
                        <div className="row border mt-3" key={exercise.id}>
                            <div className="col-6">
                                <h2 className="fw-bold mt-4 pb-3">{exercise.name}</h2>
                                <p className="mt-5">{exercise.description}</p>
                            </div>
                            <div className="col-6 mt-2 mb-2 d-flex justify-content-end">
                                <iframe
                                    src={exercise.url}
                                    className="videos"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title={exercise.name}
                                />
                            </div>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};


