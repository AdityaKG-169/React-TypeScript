import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
	return (
		<nav className="navbar">
			<div className="navbar__logo-container">
				<span className="navbar__logo-text">
					<Link to="/" className="navbar__logo-link">
						The <span className="navbar__logo-text--red">'संवाद'</span>
					</Link>
				</span>
			</div>
			<div className="navbar__links-container">
				<span className="navbar__link-box">
					<a href="#politics" className="navbar__link-text">
						Politics
					</a>
				</span>
				<span className="navbar__link-box">
					<a href="#education" className="navbar__link-text">
						Education
					</a>
				</span>
				<span className="navbar__link-box">
					<Link to="/write">
						<button className="navbar__write-button">Write For Us!</button>
					</Link>
				</span>
			</div>
		</nav>
	);
}

export default NavBar;
