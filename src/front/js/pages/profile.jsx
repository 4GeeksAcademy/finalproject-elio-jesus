import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/profile.css"




const Profile = () => {
    const { store, actions } = useContext(Context)
    let hour = new Date()
    let horas = hour.getHours()
    useEffect(() => { !store.token ? navigate("/login") : null }, [store.token])
    return (

        store.token && //pregunta esto
        <div className="container-fluid p-0">
            <div className="container-fluid fondo">
                <div className="container">
                    <div className="row justify-content-between py-3">
                        <div className="col-12 col-md-7 d-flex align-items-end">
                            <h1 className="text ps-5">{horas > 12 ? "Buenas tardes" : "Buenos dias"} {store.currentUser['firstName']}</h1>
                        </div>
                        <div className="col-12 col-md-5 text-end">
                            <img className="imagen img-thumbnail justify-content-center" src="https://i.pravatar.cc/300" alt="fotoperfil" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-md-none" style={{ height: "110px" }} ></div>
            <div className="container">
                <div className="row justify-content-between align-items-end mt-5">
                    <div className="col-12 col-md-6">
                        <div className="border border-3 rounded-3 p-5">
                            <div className="d-flex justify-content-between align-items-center">
                                <h3>Detalles de usuario</h3>
                                <Link to="/edit_profile">
                                    Editar Información
                                </Link>
                            </div>
                            <p className="fs-5 fw-bolder data-text">Correo</p>
                            <p className="fs-6">{store.currentUser['email']}</p>
                            <p className="fs-5 fw-bolder data-text">Nombre</p>
                            <p className="fs-6">{store.currentUser['firstName']} {store.currentUser['lastName']}</p>
                            <p className="fs-5 fw-bolder data-text">Cumpleaños</p>
                            <p className="fs-6">{!store.currentUser['birthDate'] ? "No cargado" : store.currentUser['birthDate']}</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="data border border-3 rounded-3 p-5">
                            <div className="d-flex justify-content-between align-items-center">
                                <h3>Informacion Personal</h3>
                                <Link to="/">
                                    Editar Información
                                </Link>
                            </div>
                            <p className="fs-5 fw-bolder data-text">Peso</p>
                            <p className="fs-6"></p>
                            <p className="fs-5 fw-bolder data-text">Estatura</p>
                            <p className="fs-6"></p>
                            <p className="fs-5 fw-bolder data-text">Medida de cintura</p>
                            <p className="fs-6"></p>
                            <p className="fs-5 fw-bolder data-text">Medida de brazo</p>
                            <p className="fs-6"></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>



    )
}

export default Profile