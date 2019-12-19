import React, { Component } from "react";

import "./SubscribeGallery.css";
import { Input } from "antd";
import ImageCard from "../ImageCard/ImageCard";

export default class SubscribeGallery extends Component {
	render() {
		const images = [...Array(12)]
			.map((e, index) =>
				require(`../../../images/categolary/categolaryImg${index +
					1}.jpg`)
			)
			.map(e => {
				return (
					<div className="col-md-2 img-gallery">
						<ImageCard img={e} height="30vh" />
					</div>
				);
			});

		return (
			<div
				className="SubscribeGalleryContainer"
				data-aos="fade-up"
				data-aos-duration="2000"
			>
				<div className="Subscribe row">
					<h1 className="font-weight-light col-md-6 text-center">
						Subscribe
					</h1>
					<div className="form-group Subscribe__form col-md-6">
						<label for="#email">Email</label>
						<Input type="text" placeholder="Input your email.." />
					</div>
				</div>
				<div className="ImageGallery">
					<div className="card">
						<h1
							style={{ paddingTop: "20%" }}
							className="font-weight-light"
						>
							DAILY INSPIRATION
						</h1>
						<p className="font-italic">#Theme</p>
					</div>
					<div className="ImageGallery__main">
						<div className="row">{images}</div>
					</div>
				</div>
			</div>
		);
	}
}
