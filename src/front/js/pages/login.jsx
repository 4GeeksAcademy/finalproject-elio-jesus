import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Login = () => {
    const { store, actions } = useContext(Context);
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const [error, setError] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleChange = (evt) => {
        setCredentials({
            ...credentials,
            [evt.target.name]: evt.target.value
        });
    }

    const handleLogin = async () => {
        if (!credentials.email || !credentials.password) {
            setError('Ambos campos son obligatorios');
            return;
        }

        const result = await actions.login(credentials);
        if (result) {
            setLoggedIn(true);
            setTimeout(() => {
                setLoggedIn(false);
            }, 2000);
        } else {
            setError('Credenciales incorrectas. Inténtalo de nuevo.');
        }
    }

    return (
        <div className="container pt-4">
            <h1 className="fs-1 text-center">Iniciar Sesión</h1>
            {error && <div className="alert alert-danger" role="alert">{error}</div>}
            <form className="form p-2 my-3 border border-1">
                <div className="mb-3">
                    <label htmlFor="inputEmail" className="form-label">E-mail</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={credentials.email}
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
                        value={credentials.password}
                        id="inputPassword"
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="button" onClick={handleLogin} className="btn btn-info w-100">Iniciar Sesión</button>
                {loggedIn && <div className="alert alert-success mt-3" role="alert">
                    Sesión iniciada con éxito
                </div>}
            </form>
            <Link to="/">
                <button className="btn btn-dark">Regresar</button>
            </Link>
        </div>
    );
}

export default Login;
