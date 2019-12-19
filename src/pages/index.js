import React, { Component } from "react";
import { connect } from "react-redux";

import "./index.css";
import Home from "./Home";

class Page extends Component {
	render() {
		return (
			<>
				<Home />
			</>
		);
	}
}

export default connect(state => state)(Page);
