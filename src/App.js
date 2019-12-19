import React, { Component } from "react";
import AOS from "aos";
import { connect } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.min.css";
import "aos/dist/aos.css";
import "./App.css";
import * as actionTypes from "./store/actions";

import Page from "./pages/index";
import axios from "./axios";

class App extends Component {
	componentDidMount() {
		AOS.init();
		this.getUsers();
	}

	getUsers = () => {
		axios
			.get("/users.json")
			.then(response => {
				this.props.getAllUsers(Object.values(response.data));
			})
			.catch(err => console.log(err));
	};

	render() {
		return <Page />;
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getAllUsers: users =>
			dispatch({ type: actionTypes.GET_USERS, users: users })
	};
};

export default connect(null, mapDispatchToProps)(App);
