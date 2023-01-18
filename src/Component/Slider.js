import React, { useState } from "react";

import arrowLeft from "../Assets/arrowLeft.png";
import arrowRight from "../Assets/arrowRight.png";

import "../styles.css/Slider.css";

const Slider = ({ slides }) => {
	const [current, setCurrent] = useState(0);
	const length = slides.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	return (
		<div className="slider">
			<div className="arrows">
				{length > 1 && <img className="arrowLeft" src={arrowLeft} alt="fleche-gauche" onClick={prevSlide} />}
				{length > 1 && <img className="arrowRight" src={arrowRight} alt="fleche-droite" onClick={nextSlide} />}
			</div>
			{slides.map((slide, index) => {
				return (
					<div className={index === current ? "slide active" : "slide"} key={index}>
						{index === current && <img src={slide} key={index} alt="images-carrousel" className="images" />}
					</div>
				);
			})}
		</div>
	);
};

export default Slider;
