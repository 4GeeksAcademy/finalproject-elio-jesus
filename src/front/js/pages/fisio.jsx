import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/fisio.css";  // Importar estilos CSS
import rigoBaby from "../../img/rigo-baby.jpg";  // Importar la imagen

export const Fisio = () => {
    const { store, actions } = useContext(Context);
    const [fisios, setFisios] = useState([]);
    const [error, setError] = useState(null);

    const fetchApprovedFisios = async (rol) => {
        try {
            const response = await actions.getUserForRol(rol);
            if (response && response.users) {
                setFisios(response.users);  // Actualizar el estado con los datos
            }
        } catch (error) {
            setError(error.message);  // Manejar el error
        }
    };

    useEffect(() => {
        fetchApprovedFisios({ "rol": "fisioterapeuta" });  // Llamar a la función al cargar el componente
    }, []);

    if (error) return <div>Error: {error}</div>;  // Mostrar mensaje de error
    if (fisios.length === 0) return <div>No hay fisioterapeutas disponibles.</div>;  // Mostrar mensaje si no hay datos

    return (
        <div className="container">
            <h2>Fisioterapeutas</h2>
            <div className="fisio-grid">
                {fisios.map((fisio) => (
                    <div key={fisio.id} className="fisio-card">
                        <div className="fisio-image">
                            <img src={!store.currentUser['avatar']? `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png`:store.currentUser['avatar']} alt="Fisioterapeuta" />
                        </div>
                        <div className="fisio-info">
                            <h3>{fisio.firstName} {fisio.lastName}</h3>
                            <p>{fisio.email}</p>
                            <div className="fisio-actions">
                                <button className="btn-details">Detalles</button>
                                <button className="btn-favorite">Agregar a favoritos</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};