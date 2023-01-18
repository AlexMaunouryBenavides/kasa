import React from "react";
import BannerAbout from "../Assets/Banner_about.jpg";
import Banner from "../Component/Banner";
import Accordion from "../Component/Accordion";
import Footer from "../Footer";
import "../styles.css/About.css";

export default function About() {
	return (
		<div>
			<Banner img={BannerAbout} texte="" />
			<div className="accordion-wrapper">
				<Accordion
					title="Fiabilité"
					description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
				/>
				<Accordion
					title="Respect"
					description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
				/>
				<Accordion
					title="Service"
					description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
				/>
				<Accordion
					title="Sécutié"
					description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
				/>
			</div>
			<Footer />
		</div>
	);
}
