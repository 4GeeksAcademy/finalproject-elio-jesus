import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/exercises.css"
import { Context } from "../store/appContext";



export const Exercises = () => {
    const ejercicios = [
        {
            id: 1,
            nombre: 'Pecho',
            descripcion: 'ejercicios para trabajar el pecho.',
            imagen: 'https://www.luzycolor2000.com/wp-content/uploads/2022/12/iluminacion-gimnasio-1536x864.jpg'
        },
        {
            id: 2,
            nombre: 'Espalda',
            descripcion: 'Ejercicios para trabajar la espalda.',
            imagen: 'https://www.luzycolor2000.com/wp-content/uploads/2022/12/iluminacion-gimnasio-1536x864.jpg'
        },
		{
			id: 3,
			nombre: 'Brazos',
			descripcion:'Ejercicios de biceps y triceps',
			imagen:'https://www.luzycolor2000.com/wp-content/uploads/2022/12/iluminacion-gimnasio-1536x864.jpg'
		},
		{
			id: 4,
			nombre: 'Piernas',
			descripcion: 'Ejercicios para piernas y pantorrillas',
			imagen: 'https://www.luzycolor2000.com/wp-content/uploads/2022/12/iluminacion-gimnasio-1536x864.jpg'
		},
		{
			id: 5,
			nombre: 'Abdomen',
			descripcion: 'Ejercicios para fortalecer el abdomen',
			imagen: 'https://www.luzycolor2000.com/wp-content/uploads/2022/12/iluminacion-gimnasio-1536x864.jpg'
		},
		{
			id: 6,
			nombre: 'Hombros',
			descripcion: 'Ejercicios para fortalecer hombros',
			imagen: 'https://www.luzycolor2000.com/wp-content/uploads/2022/12/iluminacion-gimnasio-1536x864.jpg'
		}
        
    ];

    return (
        <div className="ejercicios-container">
            <h1>Ejercicios</h1>
            <div className="ejercicios-list">
                {ejercicios.map(ejercicio => (
                    <div className="ejercicio-card" key={ejercicio.id}>
                        <img src={ejercicio.imagen} alt={ejercicio.nombre} className="ejercicio-img" />
                        <div className="ejercicio-info">
                            <h2>{ejercicio.nombre}</h2>
                            <p>{ejercicio.descripcion}</p>
                            <button className="btn btn-dark">dime más</button>
                            {/* <Link to={`/ejercicio/${ejercicio.id}`} className="btn btn-dark">dime más</Link> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


