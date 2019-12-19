import React, { Component } from "react";
import { Icon } from "antd";

import "./Footer.css";

export default class Footer extends Component {
	render() {
		const icons = ["facebook", "twitter", "instagram"].map(e => (
			<Icon type={e} className="icon" />
		));

		const lists = [
			"privacy policy",
			"terms and conditions",
			"about",
			"shipping infor",
			"returns/exchanges",
			"contact"
		].map(e => <li className="list-items">{e}</li>);

		return (
			<div className="footer">
				<div className="row footer__main">
					<div className="col-md-4 contact text-left">
						<h2 className="text-white">Contact</h2>
						<p className="font-weight-light">
							Address: Seestrasse 21, Zurich{" "}
						</p>
						<p className="font-weight-light">
							E-mail: biagiottitheme@gmail.com{" "}
						</p>
						<p className="font-weight-light">
							Phone : + 99 411 725 39 12{" "}
						</p>
					</div>
					<div className="col-md-4 social text-center pt-5">
						<h2 className="text-white text-uppercase font-weight-light font-italic">
							biagiotti
						</h2>
						<p className="font-weight-light">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit.
						</p>
						{icons}
					</div>
					<div className="col-md-4 collections text-right pt-5">
						<h2 className="text-white">Collections</h2>
						<p className="font-weight-light">
							Glowing skin is a result
						</p>
						<p className="font-weight-light">
							ABCDEH Beauty – Forever Young
						</p>
						<p className="font-weight-light">Pure Skin Solutions</p>
					</div>
				</div>
				<div className="footer__navbar">
					<ul>{lists}</ul>
				</div>
			</div>
		);
	}
}
