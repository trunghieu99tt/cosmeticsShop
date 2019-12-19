import React, { Component } from "react";
import { Button, Icon, Row, Col } from "antd";

import "./HeadTop.css";
import Login from "../../../components/Login/Login";
import SignIn from "../../../components/SignIn/SignIn";
import BackDrop from "../BackDrop/BackDrop";
import { connect } from "react-redux";

class HeadTop extends Component {
	state = {
		showLogin: false,
		showSignIn: false,
		showBackDrop: false,
		userInfor: null,
		message: null
	};

	showLogin = () => {
		this.setState({
			showLogin: true,
			showBackDrop: true,
			showSignIn: false
		});
	};

	showSignIn = () => {
		this.setState({ showSignIn: true, showLogin: false });
	};

	hideLogIn = () => {
		this.setState({ showLogin: false });
	};

	hideSignIn = () => {
		this.setState({ showSignIn: false });
	};

	logOut = () => {
		this.setState({ userInfor: null });
		localStorage.removeItem("user");
	};

	parseUsers = user => {
		this.setState({
			userInfor: user
		});
	};

	hideBackDrop = () => {
		this.setState({
			showBackDrop: false,
			showLogin: false,
			showSignIn: false
		});
	};

	keyDownEvent(event) {
		const { showLogin, showSignIn, userInfor } = this.state;
		switch (event.keyCode) {
			case 116:
				event.returnValue = false;
				break;
			case 112:
				{
					event.preventDefault();
					if (!showLogin && !userInfor) this.showLogin();
					else this.hideLogIn();
				}
				break;
			case 113:
				if (!showSignIn && !userInfor) this.showSignIn();
				else this.hideSignIn();
				break;
			default:
				break;
		}
	}

	componentDidMount() {
		window.onkeydown = this.keyDownEvent.bind(this);
		this.setState({ userInfor: JSON.parse(localStorage.getItem("user")) });
	}

	componentDidUpdate(prevState) {
		if (prevState.userInfor !== this.state.userInfor) {
			const userInfor = this.state.userInfor;
			if (this.setState.userInfor)
				localStorage.setItem("user", JSON.stringify(userInfor));
			console.log(JSON.parse(localStorage.getItem("user")));
		}
	}

	render() {
		return (
			<div>
				<BackDrop
					show={this.state.showSignIn || this.state.showLogin}
					hideBackDrop={this.hideBackDrop}
				/>
				<Login
					show={this.state.showLogin}
					showSignIn={this.showSignIn}
					hideLogIn={this.hideLogIn}
					parseUsers={user => this.parseUsers(user)}
				/>
				<SignIn
					show={this.state.showSignIn}
					hideSignIn={this.hideSignIn}
				/>
				<div className="HeadTop">
					{this.state.message ? <h1>{this.state.message}</h1> : null}
					<div className="row">
						<div className="col-md-2 offset-md-1 text-center">
							<p>comestic_shop@gmail.com</p>
						</div>
						<div className="col-md-6 text-center pt-1">
							<p>Free ship for international with price > $150</p>
						</div>
						{this.state.userInfor ? (
							<div className="col-md-1 offset-md-1 text-center pb-1 pt-1 d-flex justify-content-center">
								<p className="text-white pr-5">
									<Icon type="user" />
									<span className="pl-5">
										{this.state.userInfor.username}
									</span>
								</p>
								<Button
									type="primary"
									onClick={this.logOut}
									className="logOutBtn"
								>
									Logout
								</Button>
							</div>
						) : (
							<div className="col-md-1 offset-md-1 text-center pb-1 pt-1">
								<Button
									type="primary"
									icon="user"
									onClick={this.showLogin}
								>
									Login
								</Button>
							</div>
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default connect(state => state)(HeadTop);
