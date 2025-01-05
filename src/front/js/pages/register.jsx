import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const initialContact = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: ""
}

export const Register = () => {
    const { store, actions } = useContext(Context);
    const [contact, setContact] = useState(initialContact);
    const [save, setSave] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (evt) => {
        setContact({
            ...contact,
            [evt.target.name]: evt.target.value
        });
    }

    const newContact = async (contact) => {
        if (!contact.firstName || !contact.lastName || !contact.username || !contact.email || !contact.password) {
            setError('Todos los campos son obligatorios');
            return;
        }

        const result = await actions.saveContact(contact);
        if (result) {
            setSave(true);
            setTimeout(() => {
                setSave(false);
            }, 2000);
        }
    }

    return (
        <div className="container pt-4">
            <h1 className="fs-1 text-center">Nuevo Usuario</h1>
            {error && <div className="alert alert-danger" role="alert">{error}</div>}
            <form className="form p-2 my-3 border border-1">
                <div className="mb-3">
                    <label htmlFor="inputFirstName" className="form-label">Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        value={contact.firstName}
                        id="inputFirstName"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputLastName" className="form-label">Apellido</label>
                    <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        value={contact.lastName}
                        id="inputLastName"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputUsername" className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        name="username"
                        value={contact.username}
                        id="inputUsername"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputEmail" className="form-label">E-mail</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={contact.email}
                        id="inputEmail"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPassword" className="form-label">Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={contact.password}
                        id="inputPassword"
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="button" onClick={() => newContact(contact)} className="btn btn-info w-100">Registrar</button>
                {save && <div className="alert alert-success mt-3" role="alert">
                    El usuario se agregó con éxito
                </div>}
            </form>
            <Link to="/">
                <button className="btn btn-dark">Regresar</button>
            </Link>
        </div>
    );
};
