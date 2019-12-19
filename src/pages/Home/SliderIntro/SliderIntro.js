import React, { Component } from "react";
import { Carousel, Row, Col, Icon } from "antd";

import "./SliderIntro.css";
import Button from "../Button/Button";

export default class SliderIntro extends Component {
	constructor(props) {
		super(props);
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
		this.carousel = React.createRef();
	}

	next = () => {
		this.carousel.current.next();
	};
	previous = () => {
		this.carousel.current.prev();
	};
	state = {
		imgURLs: [...Array(3)].map((e, index) =>
			require(`../../../images/MainSlider/slider${index + 1}.jpg`)
		),
		titles: ["original style", "infinite beauty", "summer look"],
		descriptions: [
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae dolorum aliquid illo consequuntur ipsam neque modi debitis nihil maxime architecto illum nobis similique molestiae, voluptas nostrum accusantium inventore recusandae rem?",
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae dolorum aliquid illo consequuntur ipsam neque modi debitis nihil maxime architecto illum nobis similique molestiae, voluptas nostrum accusantium inventore recusandae rem?",
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae dolorum aliquid illo consequuntur ipsam neque modi debitis nihil maxime architecto illum nobis similique molestiae, voluptas nostrum accusantium inventore recusandae rem?"
		]
	};

	componentDidMount() {
		const sliders = document.querySelectorAll(".slider__container ");
		Array.from(sliders).map((s, index) => {
			s.style.background = `linear-gradient(to bottom, rgba(0,0,0,.5), rgba(0,0,0,.6)),url(${this.state.imgURLs[index]})`;
			s.style.backgroundSize = "cover";
			s.style.backgroundPosition = "10%";
			s.style.backgroundAttachment = "fixed";
		});
	}

	render() {
		const props = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		};
		const sliders = [...Array(3)].map((el, index) => {
			return (
				<div>
					<div className="slider__container">
						<div className="slider__content">
							<h1 className="text-white text-uppercase slider__content--title">
								{this.state.titles[index]}
							</h1>
							<p className="slider__content--description">
								{this.state.descriptions[index]}
							</p>
							<Button text={"View More"} />
						</div>
					</div>
				</div>
			);
		});

		return (
			<div style={{ position: "relative" }}>
				<Icon
					type="left-circle"
					onClick={this.previous}
					className="icon-controller icon-controller__left"
				/>
				<Carousel
					effect="fade"
					autoplay
					autoplaySpeed={5000}
					ref={this.carousel}
					{...props}
				>
					{sliders}
				</Carousel>
				<Icon
					type="right-circle"
					onClick={this.next}
					className="icon-controller icon-controller__right"
				/>
			</div>
		);
	}
}
