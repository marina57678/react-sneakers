import React from "react";
import "./style.scss";

function Header() {
   return (
		<header className="header">
			<div className="header-logo header-item">
				<img src={"/img/logo.svg"} alt="logo" />
			</div>
			<div className="header-title header-item">
				<h1 className="header-name">REACT SNEAKERS</h1>
				<h2 className="header-slogan">
					every little step leads to success
				</h2>
			</div>
			<div className="header-menu header-item">
				<ul className="header-menu-list">
					<li className="header-menu-item cart">
						<img alt="your cart" src="/img/btns/cart.svg"></img>
						<span className="cart-amount">200k</span>
					</li>
					<li className="header-menu-item favourites">
						<img
							alt="your favourites"
							src="/img/btns/favourites.svg"
						></img>
					</li>
					<li className="header-menu-item account">
						<img alt="your account" src="/img/btns/account.svg"></img>
					</li>
					<li className="header-menu-item burger-btn">
						<span className="burger-line"></span>
						<span className="burger-line"></span>
						<span className="burger-line"></span>
					</li>
				</ul>
			</div>
		</header>
	);
}
export default Header;