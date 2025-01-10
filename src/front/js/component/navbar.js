import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.css"

export const Navbar = () => {
	const {store,actions} = useContext(Context)
	return (
		<nav className="navbar navbar-dark bg-dark">
			<div className="container">
				<Link className="name" to="/">
					<span className="navbar-brand mb-0 h1">Gym Bro</span>
				</Link>
				<div className="d-flex justify-content-end ">
					{!store.token?
						<Link to="/login">
							<button className="btn boton me-2"><i className="fa-solid fa-right-to-bracket"></i></button>
						</Link>:
						<Link to="/">
							<button onClick={()=>actions.close()} className="btn boton"><i className="fa-solid fa-right-from-bracket"></i></button>
						</Link>
					}
				</div>
			</div>
		</nav>
	);
};
