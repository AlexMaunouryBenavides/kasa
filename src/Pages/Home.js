import React from "react";
import Banner from "../Component/Banner";
import { Link } from "react-router-dom";
import BannerHome from "../Assets/Banner_home.svg";
import logements from "../Data/logements.json";
import Footer from "../Footer";
import "../styles.css/Cart.css";

export default function Home() {
	return (
		<div>
			<Banner img={BannerHome} texte="Chez vous, partout et ailleurs" />
			<div className="cart-container">
				{logements.map((logement) => {
					return (
						<div className="cart" key={logement.id}>
							<Link to={`logement/${logement.id}`}>
								<div className="cover-wrapper">
									<div className="shadow-cover"></div>
									<img src={logement.cover} alt="cover" className="cover" />
									<h3>{logement.title}</h3>
								</div>
							</Link>
						</div>
					);
				})}
			</div>

			<Footer />
		</div>
	);
}
