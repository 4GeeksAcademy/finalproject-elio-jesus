import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/service.css"
import { Context } from "../store/appContext";

const Service = () =>{
    const service = [
        {
            id: 'Entrenadores',
            nombre: 'Entrenadores',
            descripcion: 'Aquí encontrarás entrenadores certificados para ayudarte con tus entranamientos',
            imagen: 'https://www.luzycolor2000.com/wp-content/uploads/2022/12/iluminacion-gimnasio-1536x864.jpg'
        },
        {
            id: 'Nutricionistas',
            nombre: 'Nutricionistas',
            descripcion: 'Aquí encontrarás profesionales en el área de nutrición',
            imagen: 'https://www.luzycolor2000.com/wp-content/uploads/2022/12/iluminacion-gimnasio-1536x864.jpg'
        },
		{
			id: 'Fisio',
			nombre: 'Fisioterapeuta',
			descripcion:'Aquí encontrarás profesionales en el área de fisio',
			imagen:'https://www.luzycolor2000.com/wp-content/uploads/2022/12/iluminacion-gimnasio-1536x864.jpg'
		}
        
    ];
    return (
            <div className="ejercicios-container ">
                <h1 className="text-center titulo mt-3 mb-5">Servicios Profesionales</h1>
                <div className="ejercicios-list">
                    {service.map(service => (
                        <div className="service-card" key={service.id}>
                            <img src={service.imagen} alt={service.nombre} className="ejercicio-img" />
                            <div className="ejercicio-info">
                                <h2>{service.nombre}</h2>
                                <p>{service.descripcion}</p>
                                {/* <button className="btn btn-dark">dime más</button> */}
                                <Link to={`/${service.id}`} className="btn btn-dark">dime más</Link>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };




export default Service