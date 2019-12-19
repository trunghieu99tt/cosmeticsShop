import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Icon, Input, Button, Checkbox, message } from "antd";

import "./Login.css";
import SignIn from "../SignIn/SignIn";
import * as actionTypes from "../../store/actions";

class NormalLoginForm extends React.Component {
	success = () => {
		message.success("Đăng nhập thành công");
	};

	error = () => {
		message.error("Thông tin đăng nhập không chính xác");
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				const users = this.props.users;
				let user = null;
				for (let u of users) {
					if (
						u.username === values.username &&
						u.password === values.password
					) {
						user = u;
						break;
					}
				}
				if (user) {
					console.log(user);
					this.success();
					this.props.parseUsers(user);
					this.props.hideLogIn();
					this.props.form.resetFields();
					localStorage.setItem("user", JSON.stringify(user));
				} else {
					this.error();
				}
			}
		});
	};

	componentDidMount() {
		console.log(this.props.users);
	}

	render() {
		const { getFieldDecorator } = this.props.form;

		let display;

		display = (
			<div
				className="Login-container"
				style={{
					transform: this.props.show
						? "translate(-50%, -50%)"
						: "translateY(-1000vh)",
					opacity: this.props.show ? "1" : "0"
				}}
			>
				<Form onSubmit={this.handleSubmit} className="login-form">
					<Form.Item>
						{getFieldDecorator("username", {
							rules: [
								{
									required: true,
									message: "Please input your username!"
								}
							]
						})(
							<Input
								prefix={
									<Icon
										type="user"
										style={{
											color: "rgba(0,0,0,.25)"
										}}
									/>
								}
								placeholder="Username"
							/>
						)}
					</Form.Item>
					<Form.Item>
						{getFieldDecorator("password", {
							rules: [
								{
									required: true,
									message: "Please input your Password!"
								}
							]
						})(
							<Input
								prefix={
									<Icon
										type="lock"
										style={{
											color: "rgba(0,0,0,.25)"
										}}
									/>
								}
								type="password"
								placeholder="Password"
							/>
						)}
					</Form.Item>
					<Form.Item>
						{getFieldDecorator("remember", {
							valuePropName: "checked",
							initialValue: true
						})(<Checkbox>Remember me</Checkbox>)}
						<a className="login-form-forgot" href="">
							Forgot password
						</a>
						<Button
							type="primary"
							htmlType="submit"
							className="login-form-button"
						>
							Log in
						</Button>
						<Button
							type="danger"
							onClick={this.props.hideLogIn}
							className="login-form-btnCancel"
						>
							Cancel
						</Button>
						Or{" "}
						<Button type="primary" onClick={this.props.showSignIn}>
							register now!
						</Button>
					</Form.Item>
				</Form>
			</div>
		);
		return display;
	}
}

const mapStateToProps = state => {
	return {
		users: state.users.usersInfor
	};
};

const mapDispatchToProps = dispatch => {
	return {
		parseUser: user =>
			dispatch({ type: actionTypes.LOGIN, usersInfor: user })
	};
};

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
	NormalLoginForm
);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(WrappedNormalLoginForm);
