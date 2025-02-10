import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/exercises.css";

export const ChestExercises = () => {
    const { actions } = useContext(Context);
    const [chestExercises, setChestExercises] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchChestExercises = async () => {
            try {
                const exercises = await actions.getExercisesGroup('chest');
                if (exercises instanceof Array) {
                    setChestExercises(exercises);
                } else if (exercises.error) {
                    throw new Error(exercises.error);
                } else {
                    throw new Error('Error al obtener ejercicios para el pecho');
                }
            } catch (error) {
                console.error("Error al obtener los ejercicios:", error);
                setError(error.message);
            }
        };

        fetchChestExercises();
    }, [actions]);

    return (
        <div className="container prueba">
            
            {error ? (
                <p className="text-danger">{error}</p>
            ) : (
                chestExercises.map(exercise => (
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
                ))
            )}
        </div>
    );
};


