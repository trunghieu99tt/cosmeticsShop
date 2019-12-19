import React, { Component } from "react";

import "./Intro.css";

export default class Intro extends Component {
	render() {
		const introes = ["How did we get there", "What it takes to lead"].map(
			e => {
				return (
					<div className="col-md-6 intro__element">
						<div className="intro">
							<h1 className="font-weight-light">{e}</h1>
							<h3 className="font-weight-light font-italic">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Totam, harum ratione non
								commodi eius molestias alias.
							</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Quis, laudantium. Fuga et non
								nesciunt sequi rerum veritatis quae delectus
								quas, eum, cupiditate perspiciatis aliquam
								debitis quis. Aliquam nemo nihil exercitationem.
							</p>
							<button className="btn btn-primary intro__button">
								Find Beauty
							</button>
						</div>
					</div>
				);
			}
		);

		const images = [...Array(2)]
			.map((e, index) =>
				require(`../../../images/MainSlider/slider${index + 1}.jpg`)
			)
			.map(e => {
				const style = {
					background: `url(${e})`,
					backgroundSize: "cover"
				};
				return (
					<div
						className="col-md-6 intro__element"
						style={style}
					></div>
				);
			});

		return (
			<div className="Intro" data-aos="fade-up" data-aos-duration="2000">
				<div class="row">
					{images[0]}
					{introes[0]}
					{introes[1]}
					{images[1]}
				</div>
			</div>
		);
	}
}
