import React, { Component } from "react";
import { Carousel, Icon } from "antd";

import "./Comments.css";

export default class Comments extends Component {
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
		titles: ["Testimonia", "Testimonia", "Testimonia"],
		descriptions: [
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur corrupti labore quaerat ipsum iusto provident, asperiores beatae porro libero temporibus nobis natus consequuntur, minus praesentium ad? Laboriosam aliquam dolorem dolore?",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur corrupti labore quaerat ipsum iusto provident, asperiores beatae porro libero temporibus nobis natus consequuntur, minus praesentium ad? Laboriosam aliquam dolorem dolore?",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur corrupti labore quaerat ipsum iusto provident, asperiores beatae porro libero temporibus nobis natus consequuntur, minus praesentium ad? Laboriosam aliquam dolorem dolore?"
		],
		name: ["Iman", "Dita von Teese", "Marc Jacobs"]
	};

	render() {
		const props = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		};

		const comments = this.state.titles.map((title, index) => {
			return (
				<div>
					<div className="commentContainer__main">
						<h1 className="text-uppercase font-weight-light">
							{title}
						</h1>
						<p className="lead">{this.state.descriptions[index]}</p>
						<p> - {this.state.name[index]} -</p>
					</div>
				</div>
			);
		});

		return (
			<div
				className="commentContainer"
				data-aos="fade-up"
				data-aos-duration="2000"
			>
				<Icon
					type="left-circle"
					onClick={this.previous}
					className="icon-controller icon-controller__left"
					style={{ color: "black" }}
				/>
				<Carousel autoplay ref={this.carousel} {...props}>
					{comments}
				</Carousel>
				<Icon
					type="right-circle"
					onClick={this.previous}
					className="icon-controller icon-controller__right"
					style={{ color: "black" }}
				/>
			</div>
		);
	}
}
