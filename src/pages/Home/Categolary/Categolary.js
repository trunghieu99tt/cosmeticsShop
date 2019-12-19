import React, { Component } from "react";

import "./Categolary.css";

export default class Categolary extends Component {
	state = {
		imagesURL: [...Array(8)].map((e, i) =>
			require(`../../../images/categolary/categolaryImg${i + 1}.jpg`)
		)
	};

	render() {
		const imagesCatogolary = this.state.imagesURL.map((e, index) => {
			const style = {
				background: `url(${e})`,
				backgroundSize: "cover",
				height: "50vh"
			};
			return (
				<div
					style={style}
					className="col-md-3 col-sm-6 Categolary__img"
				>
					<div className="Categolary__img--back ">
						<h2 className="font-weight-light">Name...</h2>
						<h5 className="font-italic font-weight-light">
							Lorem ipsum dolor
						</h5>
					</div>
				</div>
			);
		});

		return (
			<div
				className="Categolary"
				data-aos="fade-up"
				data-aos-duration="2000"
			>
				<div className="row" style={{ margin: "0" }}>
					{imagesCatogolary}
				</div>
			</div>
		);
	}
}
