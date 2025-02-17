import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.css"
import "../../img/logo.png"

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	return (
		<nav className="navbar navbar-dark bg-dark">
			<div className="container">
				<Link className="name" to="/">
					<img src="../../img/logo.png"/>
				</Link>
				<div className="d-flex ">
						<div className="navbar-nav d-flex flex-row">
							<Link className="linea" to="/"><a className="nav-link active pe-3" >Inicio</a></Link>
							<Link className="linea" to="/exercises"><a className="nav-link active pe-3">Ejercicios</a></Link>
							<Link className="linea" to="/service"><a className="nav-link active pe-5">Servicios</a></Link>
							{/* <Link className="linea" to="/"><a className="nav-link active pe-5">Nosotros</a></Link> */}
							
						</div>
					{!store.token ?
						<Link to="/login">
							<button className="btn boton me-2"><i className="fa-solid fa-right-to-bracket"></i></button>
						</Link> :
						<Link to="/">
							<button onClick={() => actions.close()} className="btn boton"><i className="fa-solid fa-right-from-bracket"></i></button>
						</Link>
					}
				</div>
			</div>
		</nav>
	);
};
