import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Gym Bro</span>
				</Link>
				<div className="d-flex justify-content-end ">
					<div className="ml-auto">
						<Link to="/demo">
							<button className="btn btn-primary me-2">Login</button>
						</Link>
					</div>
					<div className="ml-auto">
						<Link to="/register">
							<button className="btn btn-primary">Register</button>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};
