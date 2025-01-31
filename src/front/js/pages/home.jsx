import React, { useState } from "react";
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
                <h1>Bienvenidos a Gym Parnert</h1>
                <h3>Tu Sitio de entrenamiento</h3>
            </section>

            {/* services */}
            <div className="container">
                <div className="row mt-5 pb-5">
                    <div className="col-12 col-md-6">
                        <img src="https://www.luzycolor2000.com/wp-content/uploads/2022/12/iluminacion-gimnasio-1536x864.jpg" className="img-fluid imgs" alt="..." />
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <div className="pt-4">
                            <h5 className="card-title text-center pt-4 mb-5">Ejercicios</h5>
                            <p className="card-text text-center mb-5">En nuestra página encontraras una serie de ejercicios y rutinas
                                según sea tu necesidad
                            </p>
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-dark">Ver mas</button>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="row pt-5 pb-5">
                    <div className="col-md-6 d-flex align-items-center">
                        <div className="">
                            <h5 className="card-title text-center pt-4 mb-5">Profesionales</h5>
                            <p className="card-text text-center mb-5"> En nuestra página tendrás la mejor asesoria de Profesionales
                                con experiencia en sus áreas, tales como: Nutricionistas, Fisioterapeutas y entrenadores. Podrás
                                agendar citas con ellos y obtener resultados.
                            </p>
                            <div className="d-flex justify-content-center mt-2">
                                <button className="btn btn-dark">Ver mas</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <img src="https://www.luzycolor2000.com/wp-content/uploads/2022/12/iluminacion-gimnasio-1536x864.jpg" className="img-fluid imgs " alt="..." />
                    </div>
                </div>

                <hr />


                <div className="row pt-5 pb-5">
                    <div className="col-12 col-md-6">
                        <img src="https://www.luzycolor2000.com/wp-content/uploads/2022/12/iluminacion-gimnasio-1536x864.jpg" className="img-fluid imgs " alt="..." />
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <div className="">
                            <h5 className="card-title text-center pt-4 mb-5">Ejercicios</h5>
                            <p className="card-text text-center ps-4 mb-5">En nuestra página encontraras una serie de ejercicios y rutinas
                                según sea tu necesidad
                            </p>
                            <div className="d-flex justify-content-center ">
                                <button className="btn btn-dark">Ver mas</button>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />
                {/* Calculator */}

                <div className="row pt-5 mb-4">
                    <div className="col-md-6">
                        <h5 className="card-title text-center ">Ingresa tus datos aquí</h5>
                    </div>
                    <div className="col-md-6">
                        <h5 className="card-title text-center ">Calculadora de carga de calorías</h5>
                    </div>
                </div>

                <div className="row pb-5">
                    <div className="col-md-6 d-flex justify-content-center">
                        <section className="tmb-calculator border border-success border-3 rounded p-4">
                            <div className="form-group ">
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
                                    <h6 className="text-center btn"
                                    >Tu carga de calorías es: {tmb.toFixed(2)} kcal</h6>
                                </div>
                            )}
                        </section>
                    </div>
                    <div className="col-md-6 text-center d-flex flex-column align-self-center ">
                        <p> Esta calculadora te dará tus calorías de mantenimiento, en base a estas puedes comer menos para la perdida de grasa (deficit calórico) o 
                            comer más para ganancia muscular (superavit calórico) 
                        </p>
                        <p className="fw-bold">Si quieres mas informacion sobre el tema oprime  
                            <a className="ps-1" href="https://8metsbilbao.com/calorias-de-mantenimiento/#:~:text=Cuando%20hablamos%20de%20calor%C3%ADas%20de,un%20nivel%20de%20vida%20saludable.">
                            aqui</a>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};
