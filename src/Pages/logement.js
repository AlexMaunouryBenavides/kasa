import React from "react";
import Slider from "../Component/Slider";
import Rating from "../Component/Rating";
import Tags from "../Component/tags";
import Accordion from "../Component/Accordion";
import { useParams } from "react-router-dom";
import logements from "../Data/logements.json";
import Footer from "../Footer";
import Error from "../Pages/Error";
import "../styles.css/Logement.css";

const Logement = () => {
	const id = useParams();
	const fichelogement = logements.find((logement) => logement.id === id.id);
	const listequip = fichelogement?.equipments.map((equipments, index) => <li key={index}>{equipments}</li>);
	if (fichelogement) {
		return (
			<>
				<Slider slides={fichelogement.pictures} />
				<div className="container">
					<div className="header">
						<div className="content-left">
							<h2>{fichelogement.title}</h2>
							<h3>{fichelogement.location}</h3>
							<div className="main-tags">
								{fichelogement.tags.map((tag, index) => (
									<Tags key={index} getTag={tag} />
								))}
							</div>
						</div>
					</div>
					<div className="main">
						<div className="content-right">
							<p>{fichelogement.host.name}</p>
							<img src={fichelogement.host.picture} alt="portrait" />
						</div>
						<div className="main-rating">
							<Rating rating={fichelogement.rating} />
						</div>
					</div>
					<div className="bottom">
						<div className="description">
							<Accordion title="Description" description={fichelogement.description} />
						</div>
						<div className="equipements">
							<Accordion title="Equipements" description={listequip} />
						</div>
					</div>
				</div>

				<Footer />
			</>
		);
	} else {
		return <Error />;
	}
};

export default Logement;
