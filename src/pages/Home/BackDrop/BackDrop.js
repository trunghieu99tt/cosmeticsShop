import React, { Component } from "react";
import "./BackDrop.css";

export default class BackDrop extends Component {
	render() {
		let display = this.props.show ? (
			<div className="BackDrop" onClick={this.props.hideBackDrop}></div>
		) : null;
		return display;
	}
}
