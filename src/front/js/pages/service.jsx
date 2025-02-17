import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/service.css"
import { Context } from "../store/appContext";

const Service = () =>{
    const service = [
        {
            id: 'trainer',
            nombre: 'Entrenadores',
            descripcion: 'Aquí encontrarás entrenadores certificados para ayudarte con tus entranamientos',
            imagen: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            id: 'nutritionist',
            nombre: 'Nutricionistas',
            descripcion: 'Aquí encontrarás profesionales en el área de nutrición',
            imagen: 'https://images.pexels.com/photos/8376232/pexels-photo-8376232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
		{
			id: 'fisio',
			nombre: 'Fisioterapeuta',
			descripcion:'Aquí encontrarás profesionales en el área de fisio',
			imagen:'https://images.pexels.com/photos/20860624/pexels-photo-20860624/free-photo-of-hombres-gimnasio-cuidado-cuidado-de-la-salud.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
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