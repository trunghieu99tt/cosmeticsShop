import React, { Component } from "react";
import { Rate, Icon, Button } from "antd";

import "./SliderItems.css";
// import "react-multi-carousel/lib/styles.css";

export default class SliderItems extends Component {
	state = {
		itemsImages: [...Array(5)].map((el, index) =>
			require(`../../../images/itemsSlider/item${index % 4}.jpg`)
		),
		itemsName: [
			"Wile Paletters",
			"rose safari",
			"stick lipstick",
			"film eyeshadow",
			"summer mirage"
		],
		itemsType: ["Lip Gloss"],
		itemsPrice: [32, 44, 45, 55, 25]
	};

	componentDidMount() {}

	render() {
		const responsive = {
			superLargeDesktop: {
				// the naming can be any, depends on you.
				breakpoint: { max: 4000, min: 3000 },
				items: 5
			},
			desktop: {
				breakpoint: { max: 3000, min: 1024 },
				items: 3
			},
			tablet: {
				breakpoint: { max: 1024, min: 464 },
				items: 2
			},
			mobile: {
				breakpoint: { max: 464, min: 0 },
				items: 1
			}
		};

		const items = this.state.itemsImages.map((el, index) => {
			const style = {
				background: `url(${this.state.itemsImages[index]})`,
				backgroundSize: "cover"
			};

			return (
				<div className="col-lg-3 col-md-4 col-sm-6 sliderItems__main">
					<div style={style} className="sliderItems__main--img">
						<div className="sliderItems__main--img__back">
							<Button
								icon="plus"
								type="link"
								className="text-dark border  border-dark rounded"
							/>
							<Button
								icon="eye"
								type="link"
								className="text-dark border border-dark rounded"
							/>
							<Button
								icon="heart"
								type="link"
								className="text-dark border border-dark rounded"
							/>
						</div>
					</div>
					<div className="sliderItems__main--content text-center pt-4">
						<h4 className="text-uppercase font-weight-light">
							{this.state.itemsName[index]}
						</h4>
						<p className="font-italic">{this.state.itemsType[0]}</p>
						<p className="lead text-warning">
							{this.state.itemsPrice[index]}.00$
						</p>
						<Rate disabled allowHalf defaultValue={4.5} />
					</div>
				</div>
			);
		});

		return (
			<div
				class="sliderItems__container"
				data-aos="fade-up"
				data-aos-duration="2000"
			>
				<div className="sliderItems__heading text-center mb-5">
					<h1 className="text-uppercase font-weight-light">
						Find your beauty match
					</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit
					</p>
				</div>
				<div
					responsive={responsive}
					className="sliderItems__main row owl-carousel"
				>
					{items}
				</div>
			</div>
		);
	}
}
