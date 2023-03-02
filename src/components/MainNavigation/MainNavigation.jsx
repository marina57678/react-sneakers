import React from "react";
import "./style.scss";

function MainNavigation() {
   return (   
		<nav className="main-nav">
			<a href ="../../App.js" className="nav-item">MEN</a>
			<a href ="../../App.js"  className="nav-item">WOMEN</a>
			<a href ="../../App.js" className="nav-item">KIDS</a>
			<a href ="../../App.js" className="nav-item">SKATE</a>
			<a href ="../../App.js" className="nav-item">ACCESSPRIES</a>
			<a href ="../../App.js" className="nav-item">SALE</a>
		</nav>
	);
};

export default MainNavigation;