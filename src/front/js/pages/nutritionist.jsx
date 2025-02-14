import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/nutritionist.css";  // Importar estilos CSS
import rigoBaby from "../../img/rigo-baby.jpg";  // Importar la imagen

export const Nutritionist = () => {
    const { store, actions } = useContext(Context);
    const [nutritionists, setNutritionists] = useState([]);
    const [error, setError] = useState(null);

    const fetchApprovedNutritionists = async (rol) => {
        try {
            const response = await actions.getUserForRol(rol);
            if (response && response.users) {
                setNutritionists(response.users);  // Actualizar el estado con los datos
            }
        } catch (error) {
            setError(error.message);  // Manejar el error
        }
    };

    useEffect(() => {
        fetchApprovedNutritionists({ "rol": "nutricionista" });  // Llamar a la función al cargar el componente
    }, []);

    if (error) return <div>Error: {error}</div>;  
    if (nutritionists.length === 0) return <div>No hay nutricionistas disponibles.</div>;  // Mostrar mensaje si no hay datos

    return (
        <div className="container">
            <h2>Nutricionistas</h2>
            <div className="nutritionist-grid">
                {nutritionists.map((nutritionist) => (
                    <div key={nutritionist.id} className="nutritionist-card">
                        <div className="nutritionist-info">
                            <h3>{nutritionist.firstName} {nutritionist.lastName}</h3>
                            <p>{nutritionist.email}</p>
                            <div className="nutritionist-actions pt-3">
                                <button className="btn-details">Detalles</button>
                                <button className="btn-favorite">Agregar a favoritos</button>
                            </div>
                        </div>
                        <div className="nutritionist-image">
                            <img src={!store.currentUser['avatar']? `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png`:store.currentUser['avatar']} alt="Nutricionista" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};