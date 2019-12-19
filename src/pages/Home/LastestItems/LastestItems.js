import React, { Component } from "react";

import "./LastestItems.css";

export default class LastestItems extends Component {
	render() {
		const items = [...Array(12)].map(e => {
			const imgURL = require("../../../images/itemsSlider/item0.jpg");

			const style = {
				background: `url(${imgURL})`,
				backgroundSize: "cover"
			};

			return (
				<div className="LastestItems__main--item col-md-3">
					<div
						className="LastestItems__main--item__img"
						style={style}
					></div>
					<div className="LastestItems__main--item__description">
						<h3 className="font-weight-light">Name....</h3>
						<p className="font-italic">Description....</p>
						<p className="text-warning font-italic">Price...</p>
					</div>
				</div>
			);
		});

		return (
			<div
				className="LastestItems"
				data-aos="fade-up"
				data-aos-anchor-placement="top-bottom"
				data-aos-duration="2000"
			>
				<div className="LastestItems__heading text-center">
					<h2>LATEST SKINCARE ESSENTIALS</h2>
					<p>At vero eos et accusamus et iusto</p>
				</div>
				<div className="LastestItems__main container">
					<div className="row">{items}</div>
				</div>
			</div>
		);
	}
}
