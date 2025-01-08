import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";

export const Home = () => {
	return (
		<div>

			{/* Hero Section */}
			<section className="hero">
				<h2>Bienvenidos a Gym Parnert</h2>
				<p>Tu Sitio de entrenamiento</p>
			</section>

			{/* new services */}

			<section className=" mb-3 pt-4 cards" >
				<div className="row">
					<div className="col-md-6">
						<img src="https://www.luzycolor2000.com/wp-content/uploads/2022/12/iluminacion-gimnasio-1536x864.jpg" class="img-fluid imgs rounded-start" alt="..." />
					</div>
					<div className="col-md-6 d-flex align-items-center">
						<div className="pt-4">
							<h5 className="card-title text-center pt-4">Ejercicios</h5>
							<p className="card-text text-center">En nuestra página encontraras una serie de ejercicios y rutinas
								según sea tu necesidad
							</p>
							<div className="d-flex justify-content-center">
								<button className="btn btn-dark">dime mas</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className=" mb-3 pt-4 cards" >
				<div className="row">
					<div className="col-md-6 d-flex align-items-center">
						<div className="">
							<h5 className="card-title text-center pt-4">Profesionales</h5>
							<p className="card-text text-center"> En nuestra página tendrás la mejor asesoria de Profesionales
								con experiencia en sus áreas, tales como: Nutricionistas, Fisioterapeutas y entrenadores. Podrás
								agendar citas con ellos y obtener resultados.
							</p>
							<div className="d-flex justify-content-center">
								<button className="btn btn-dark">dime mas</button>
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<img src="https://www.luzycolor2000.com/wp-content/uploads/2022/12/iluminacion-gimnasio-1536x864.jpg" class="img-fluid imgs rounded-start" alt="..." />
					</div>
				</div>
			</section>



			<section className=" mb-3 pt-4 cards" >
				<div className="row">
					<div className="col-md-6">
						<img src="https://www.luzycolor2000.com/wp-content/uploads/2022/12/iluminacion-gimnasio-1536x864.jpg" class="img-fluid imgs rounded-start" alt="..." />
					</div>
					<div className="col-md-6 d-flex align-items-center">
						<div className="">
							<h5 className="card-title text-center pt-4">Ejercicios</h5>
							<p className="card-text text-center">En nuestra página encontraras una serie de ejercicios y rutinas
								según sea tu necesidad
							</p>
							<div className="d-flex justify-content-center">
								<button className="btn btn-dark">dime mas</button>
							</div>
						</div>
					</div>
				</div>
			</section>



			{/* Testimonials Section */}
			
			<h1 className="text-center pt-4">Testimonios</h1>	
				<div className="row pt-4 pb-4">

					<div className="col-md-4 ">
						<div className="p-3">
							<div className="d-flex justify-content-center">
								<img src="https://www.luzycolor2000.com/wp-content/uploads/2022/12/iluminacion-gimnasio-1536x864.jpg" class="testimonialI rounded-circle" alt="..." />
							</div>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<a href="#" className="card-link">Card link</a>

							</div>
						</div>
					</div>
				
					<div className="col-md-4 ">
						<div className="p-3">
							<img src="https://www.luzycolor2000.com/wp-content/uploads/2022/12/iluminacion-gimnasio-1536x864.jpg" class="testimonialI rounded-circle" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<a href="#" className="card-link">Card link</a>

							</div>
						</div>
					</div>

					<div className="col-md-4">
						<div className="p-3">
							<img src="https://www.luzycolor2000.com/wp-content/uploads/2022/12/iluminacion-gimnasio-1536x864.jpg" class="testimonialI rounded-circle" alt="..." />
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<a href="#" className="card-link">Card link</a>

							</div>
						</div>
					</div>




				</div>

			


		</div>
	);
};


