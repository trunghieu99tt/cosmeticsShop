import React from "react";

import "./ImageCard.css";

export default function ImageCard(props) {
	const style = {
		background: `url(${props.img})`,
		backgroundSize: "cover",
		backgroundPosition: "50%",
		height: `${props.height}`
	};
	return <div className="ImageCard" style={style}></div>;
}
