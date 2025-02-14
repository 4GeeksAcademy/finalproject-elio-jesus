import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/exercises.css"
import { Context } from "../store/appContext";



const Exercises = () => {
    const exercises = [
        {
            id: 'chest_exercises',
            nombre: 'Pectorales',
            descripcion: 'ejercicios para fortalecer el pecho.',
            imagen: 'https://res.cloudinary.com/dntc8trob/image/upload/v1739574697/pexels-olly-3837757_nkxqim.jpg'
        },
        {
            id: 'back_exercises',
            nombre: 'Espalda',
            descripcion: 'Ejercicios para fortalecer la espalda.',
            imagen: 'https://res.cloudinary.com/dntc8trob/image/upload/v1739574852/pexels-pixabay-50597_vrnyv7.jpg'
        },
		{
			id: 'arms_exercises',
			nombre: 'Brazos',
			descripcion:'Ejercicios para fortalecer biceps y triceps',
			imagen:'https://res.cloudinary.com/dntc8trob/image/upload/v1739574610/pexels-andres-ayrton-6550874_jca2my.jpg'
		},
		{
			id: 'legs_exercises',
			nombre: 'Piernas',
			descripcion: 'Ejercicios para fortalecer piernas y pantorrillas',
			imagen: 'https://res.cloudinary.com/dntc8trob/image/upload/v1739575025/pexels-scottwebb-136404_rz2sqe.jpg'
		},
		{
			id: 'abdomen_exercises',
			nombre: 'Abdomen',
			descripcion: 'Ejercicios para fortalecer el abdomen',
			imagen: 'https://res.cloudinary.com/dntc8trob/image/upload/v1739575085/pexels-jonathanborba-3076516_d7n6rl.jpg'
		},
		{
			id: 'shoulders_exercises',
			nombre: 'Hombros',
			descripcion: 'Ejercicios para fortalecer hombros',
			imagen: 'https://res.cloudinary.com/dntc8trob/image/upload/v1739575168/pexels-tima-miroshnichenko-5327508_cpjlix.jpg'
		}
        
    ];

    return (
        <div className="ejercicios-container ">
            <h1 className="text-center titulo mt-3 mb-5">Ejercicios por grupos musculares</h1>
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


export default Exercises