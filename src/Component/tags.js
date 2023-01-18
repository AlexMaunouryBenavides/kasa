import React from "react";
import "../styles.css/Tags.css";

const Tags = ({ getTag }) => {
	return (
		<button className="tag">
			<p className="tag-text">{getTag}</p>
		</button>
	);
};

export default Tags;
