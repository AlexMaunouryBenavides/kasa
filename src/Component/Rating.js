import React from "react";
import redstar from "../Assets/redstar.jpg";
import greystar from "../Assets/graystar.jpg";

function Rating({ rating }) {
	const stars = [1, 2, 3, 4, 5];
	return (
		<div className="rating">
			{stars.map((star) =>
				rating >= star ? (
					<img src={redstar} key={star} className="rating-stars" alt="star" />
				) : (
					<img src={greystar} key={star} className="rating-stars" alt="star" />
				)
			)}
		</div>
	);
}

export default Rating;
