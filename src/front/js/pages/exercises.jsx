import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/exercises.css"
import { Context } from "../store/appContext";



export const Exercises = () => {
    const exercises = [
        {
            id: 'chest_exercises',
            nombre: 'Pectorales',
            descripcion: 'ejercicios para fortalecer el pecho.',
            imagen: 'https://www.luzycolor2000.com/wp-content/uploads/2022/12/iluminacion-gimnasio-1536x864.jpg'
        },
        {
            id: 'back_exercises',
            nombre: 'Espalda',
            descripcion: 'Ejercicios para fortalecer la espalda.',
            imagen: 'https://www.luzycolor2000.com/wp-content/uploads/2022/12/iluminacion-gimnasio-1536x864.jpg'
        },
		{
			id: 'arms_exercises',
			nombre: 'Brazos',
			descripcion:'Ejercicios para fortalecer biceps y triceps',
			imagen:'https://www.luzycolor2000.com/wp-content/uploads/2022/12/iluminacion-gimnasio-1536x864.jpg'
		},
		{
			id: 'legs_exercises',
			nombre: 'Piernas',
			descripcion: 'Ejercicios para fortalecer piernas y pantorrillas',
			imagen: 'https://www.luzycolor2000.com/wp-content/uploads/2022/12/iluminacion-gimnasio-1536x864.jpg'
		},
		{
			id: 'abdomen_exercises',
			nombre: 'Abdomen',
			descripcion: 'Ejercicios para fortalecer el abdomen',
			imagen: 'https://www.luzycolor2000.com/wp-content/uploads/2022/12/iluminacion-gimnasio-1536x864.jpg'
		},
		{
			id: 'shoulders_exercises',
			nombre: 'Hombros',
			descripcion: 'Ejercicios para fortalecer hombros',
			imagen: 'https://www.luzycolor2000.com/wp-content/uploads/2022/12/iluminacion-gimnasio-1536x864.jpg'
		}
        
    ];

    return (
        <div className="ejercicios-container ">
            <h1>Ejercicios</h1>
            <div className="ejercicios-list">
                {exercises.map(exercises => (
                    <div className="ejercicio-card" key={exercises.id}>
                        <img src={exercises.imagen} alt={exercises.nombre} className="ejercicio-img" />
                        <div className="ejercicio-info">
                            <h2>{exercises.nombre}</h2>
                            <p>{exercises.descripcion}</p>
                            {/* <button className="btn btn-dark">dime más</button> */}
                            <Link to={`/${exercises.id}`} className="btn btn-dark">dime más</Link>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


