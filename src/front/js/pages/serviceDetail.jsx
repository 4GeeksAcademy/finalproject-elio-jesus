import React,{useState,useEffect,useContext} from "react";
import { Context } from "../store/appContext";


const ServiceDetail = () => {
   return(
        <div className="container vh-100 d-flex align-items-center  ">
            <div className="row vw-100 justify-content-around p-5 borde background-green">
                <div className="col-5 borde d-flex p-4 background-white">
                    <div className="derecha ms-3 me-2">
                        <p className="fs-5 fw-bolder data-text">Correo</p>
                        <p className="fs-6">elio@gmail.com</p>
                        <p className="fs-5 fw-bolder data-text">Telefono de Contacto</p>
                        <p className="fs-6">elio@gmail.com</p>
                        <p className="fs-5 fw-bolder data-text">Linkedin</p>
                        <p className="fs-6">elio@gmail.com</p>
                        <p className="fs-5 fw-bolder data-text">Profesión</p>
                        <p className="fs-6">elio@gmail.com</p>
                    </div>
                    <div className="izquierda">
                        hola
                    </div>
                </div>
                <div className="col-5 d-flex flex-column align-items-center">
                    <img className="imagen-detalle img-thumbnail" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="imagen" />
                    <div className="profesion mt-5 ">
                        <h1 className="fs-1 fw-bolder text">Entrenador</h1>
                    </div>
                </div>
            </div>
        </div>
   )
}

export default ServiceDetail