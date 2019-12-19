import React, { Component } from "react";
import ImageCard from "../ImageCard/ImageCard";

import "./BlogPost.css";

export default class BlogPost extends Component {
	render() {
		const imgURL = [...Array(4)].map((e, index) =>
			require(`../../../images/categolary/categolaryImg${index + 2}.jpg`)
		);

		const imagesCard = imgURL.map(e => {
			return <ImageCard img={e} />;
		});

		const elements = imagesCard.map(e => {
			return (
				<div className="col-md-3 w-100">
					<div className="imgCard-container overflow-hidden">{e}</div>
					<div className="pt-2">
						<p className="text-secondary">By ...</p>
						<h1 className="lead">Name...</h1>
						<p className="font-italic">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit.{" "}
						</p>
						<button className="btn blogBost__btn font-weight-light">
							Read More
						</button>
					</div>
				</div>
			);
		});

		return (
			<div
				className="BlogPost"
				data-aos="fade-up"
				data-aos-duration="3000"
			>
				<div className="BlogPost__heading text-center mb-5">
					<h2 className="text-uppercase">Find Your Beauty match</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit.
					</p>
				</div>
				<div className="row">{elements}</div>
			</div>
		);
	}
}
