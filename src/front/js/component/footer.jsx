import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer bg-dark">
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
				<p className="text-end me-5">Copyright © 2025 Gym Bro</p>
			</div>
		</div>
	</footer>
);
