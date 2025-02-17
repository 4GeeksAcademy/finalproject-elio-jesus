import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importar Link
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState("male");
    const [tmb, setTmb] = useState(0);

    const calculateTMB = () => {
        let tmbResult = (10 * weight) + (6.25 * height) - (5 * age);
        if (gender === "male") {
            tmbResult += 5;
        } else if (gender === "female") {
            tmbResult += 161;
        }
        setTmb(tmbResult);
    };

    return (
        <div>
            {/* Hero Section */}
            <section className="hero">
                <h1>Bienvenidos a Gym Partner</h1>
                <h3>Tu Sitio de entrenamiento</h3>
            </section>

            {/* Services */}
            <div className="container">
                <div className="row mt-5 pb-5">
                    <div className="col-12 col-md-6">
                        <img src="https://res.cloudinary.com/dntc8trob/image/upload/v1739574219/pexels-karen-irala-242489519-14099910_jwxcr1.jpg" className="img-fluid imgs" alt="..." />
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <div className="pt-4">
                            <h5 className="card-title text-center pt-4 mb-5">Rutinas</h5>
                            <p className="card-text text-center mb-5">
                                En nuestra página encontrarás una serie de ejercicios y rutinas según sea tu necesidad.
                            </p>
                            <div className="d-flex justify-content-center">
                                <Link to="/exercises" className="btn btn-dark">Ver más</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="row pt-5 pb-5">
                    <div className="col-md-6 d-flex align-items-center">
                        <div className="">
                            <h5 className="card-title text-center pt-4 mb-5">Profesionales</h5>
                            <p className="card-text text-center mb-5">
                                En nuestra página tendrás la mejor asesoría de profesionales con experiencia en sus áreas, tales como: Nutricionistas, Fisioterapeutas y entrenadores. Podrás agendar citas con ellos y obtener resultados.
                            </p>
                            <div className="d-flex justify-content-center mt-2">
                                <Link to="/service" className="btn btn-dark">Ver más</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <img src="https://res.cloudinary.com/dntc8trob/image/upload/v1739572714/ftrwllrafvc7umrcrekm.jpg" className="img-fluid imgs" alt="..." />
                    </div>
                </div>

                <hr />

                <div className="row pt-5 pb-5">
                    <div className="col-12 col-md-6">
                        <img src="https://res.cloudinary.com/dntc8trob/image/upload/v1739572993/pexels-tima-miroshnichenko-5327507_oxjktg.jpg" className="img-fluid imgs" alt="..." />
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <div className="">
                            <h5 className="card-title text-center pt-4 mb-5">Ejercicios</h5>
                            <p className="card-text text-center ps-4 mb-5">
                                En nuestra página encontrarás una serie de ejercicios y rutinas según sea tu necesidad.
                            </p>
                            <div className="d-flex justify-content-center">
                                <Link to="/" className="btn btn-dark">Ver más</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />

                {/* Calculator */}
                <div className="row pt-5 mb-4">
                    <div className="col-md-6">
                        <h5 className="card-title text-center">Ingresa tus datos aquí</h5>
                    </div>
                    <div className="col-md-6">
                        <h5 className="card-title text-center">Calculadora de carga de calorías</h5>
                    </div>
                </div>

                <div className="row pb-5">
                    <div className="col-md-6 d-flex justify-content-center">
                        <section className="tmb-calculator border border-success border-3 rounded p-4">
                            <div className="form-group">
                                <label className="pb-1 ms-3">Peso (kg):</label>
                                <input
                                    type="number"
                                    className="form-control imput"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                />
                            </div>
                            <div className="form-group pt-2">
                                <label className="pb-1 ms-3">Altura (cm):</label>
                                <input
                                    type="number"
                                    className="form-control imput"
                                    value={height}
                                    onChange={(e) => setHeight(e.target.value)}
                                />
                            </div>
                            <div className="form-group pt-2">
                                <label className="pb-1 ms-3">Edad:</label>
                                <input
                                    type="number"
                                    className="form-control imput"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                />
                            </div>
                            <div className="form-group pt-2">
                                <label className="pb-1 ms-3">Género:</label>
                                <select
                                    className="form-control imput"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                >
                                    <option value="male">Hombre</option>
                                    <option value="female">Mujer</option>
                                </select>
                            </div>
                            <div className="d-flex justify-content-center pt-4 pb-4">
                                <button className="btn btn-dark" onClick={calculateTMB}>Calcular</button>
                            </div>
                            {tmb > 0 && (
                                <div className="result pt-4">
                                    <h6 className="text-center btn">Tu carga de calorías es: {tmb.toFixed(2)} kcal</h6>
                                </div>
                            )}
                        </section>
                    </div>
                    <div className="col-md-6 text-center d-flex flex-column align-self-center">
                        <p>
                            Esta calculadora te dará tus calorías de mantenimiento. En base a estas, puedes comer menos para la pérdida de grasa (déficit calórico) o comer más para ganancia muscular (superávit calórico).
                        </p>
                        <p className="fw-bold">
                            Si quieres más información sobre el tema, oprime{" "}
                            <a className="ps-1" href="https://8metsbilbao.com/calorias-de-mantenimiento/#:~:text=Cuando%20hablamos%20de%20calor%C3%ADas%20de,un%20nivel%20de%20vida%20saludable.">
                                aquí
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};