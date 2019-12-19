import React, { Component } from "react";

import "./Guarantee.css";

export default class Guarantee extends Component {
	render() {
		const numbers = [42, 57, 32];
		const titles = ["ON-LINE PURCHASE", "FREE SHIPPING", "MONEY BACK"];
		const description = [
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum distinctio ab consequuntur sit perspiciatis non facere sint laudantium.",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum distinctio ab consequuntur sit perspiciatis non facere sint laudantium.",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum distinctio ab consequuntur sit perspiciatis non facere sint laudantium."
		];

		const elements = numbers.map((num, index) => {
			return (
				<div className="col-md-4 Guarantee__main">
					<h1
						className="text-warning font-italic font-weight-light"
						style={{
							lineHeight: "100px",
							paddingRight: "1rem",
							color: "orange"
						}}
					>
						{num}
					</h1>
					<div className="Guarantee__main--content">
						<h3 className="font-weight-light">{titles[index]}</h3>
						<p className="font-italic font-weight-light">
							{description[index]}
						</p>
					</div>
				</div>
			);
		});

		return (
			<div
				className="Guarantee"
				data-aos="fade-up"
				data-aos-duration="2000"
			>
				<div className="row">{elements}</div>
			</div>
		);
	}
}
