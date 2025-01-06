import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store,actions} = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Gym Bro</span>
				</Link>
				<div className="d-flex justify-content-end ">
					{!store.token?
						<Link to="/login">
							<button className="btn btn-primary me-2">Iniciar sesion</button>
						</Link>:
						<Link to="/">
							<button onClick={()=>actions.close()} className="btn btn-primary">Cerrar sesion</button>
						</Link>
					}
				</div>
			</div>
		</nav>
	);
};
