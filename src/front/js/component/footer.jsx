import React, { Component } from "react";
import "../../styles/home.css"
import { useLocation } from "react-router-dom";

export const Footer = () => {
	const location= useLocation()
	
	return (
	<footer className= {`text-center vw-100 ${location.pathname !== "/" && "footer"} bg-dark`}>
			<div className="row">
				<div className="col-md-6 text-start ps-5">	
					<a href="https://www.instagram.com/">
						<i className="fa-brands fa-instagram p-2"></i>
					</a>
					<a href="https://www.facebook.com/">
						<i className="fa-brands fa-facebook p-2"></i>
					</a>
					<a href="https://x.com/">
						<i className="fa-brands fa-x-twitter p-2"></i>
					</a>
					<a href="https://www.threads.net/">
						<i className="fa-brands fa-square-threads p-2"></i>
					</a>
				</div>
				<div className="col-md-6">
					<p className="text-end me-5 text-light">Copyright © 2025 Gym Bro</p>
				</div>
			</div>
		</footer>
	);

};
	
		