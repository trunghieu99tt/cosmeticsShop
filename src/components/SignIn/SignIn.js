import React, { Component } from "react";
import { connect } from "react-redux";
import {
	Form,
	Input,
	Tooltip,
	Icon,
	Cascader,
	Select,
	Row,
	Col,
	Checkbox,
	Button,
	AutoComplete,
	message
} from "antd";
import validator from "validator";

import * as actionTypes from "../../store/actions";
import axios from "../../axios";
import "./SignIn.css";
import Login from "../Login/Login";

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

class RegistrationForm extends Component {
	state = {
		confirmDirty: false,
		autoCompleteResult: []
	};
	success = () => {
		message.success("Đăng kí thành công");
	};

	error = () => {
		message.error("Đăng kí không thành công");
	};

	warning = () => {
		message.warning("Email hoặc username đã được sử dụng");
	};

	checkEmail = email => {
		const users = this.props.users.usersInfor;
		console.log(users);
		for (let u of users) {
			if (u.email == email) return false;
		}
		return validator.isEmail(email);
	};

	checkUserName = username => {
		const users = this.props.users.usersInfor;
		for (let u of users) {
			if (u.username == username) return false;
		}
		return true;
	};

	checkPassWord = password => {
		var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
		return password.match(passw);
	};

	cancel = () => {
		this.setState({ show: false });
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				console.log(values);
				if (
					this.checkEmail(values.email) &&
					this.checkUserName(values.username) &&
					this.checkPassWord(values.password)
				) {
					axios
						.post("/users.json", values)
						.then(response => {
							this.props.addUser(values);
							this.success();
							this.setState({ show: false });
							this.props.hideSignIn();
						})
						.catch(err => console.log(err));
				} else {
					this.warning();
				}
			} else this.error();
		});
	};

	handleConfirmBlur = e => {
		const { value } = e.target;
		this.setState({ confirmDirty: this.state.confirmDirty || !!value });
	};

	compareToFirstPassword = (rule, value, callback) => {
		const { form } = this.props;
		if (value && value !== form.getFieldValue("password")) {
			callback("Two passwords that you enter is inconsistent!");
		} else {
			callback();
		}
	};

	validateToNextPassword = (rule, value, callback) => {
		const { form } = this.props;
		if (value && this.state.confirmDirty) {
			form.validateFields(["confirm"], { force: true });
		}
		callback();
	};

	render() {
		const { getFieldDecorator } = this.props.form;
		const { autoCompleteResult } = this.state;

		const formItemLayout = {
			labelCol: {
				xs: { span: 24 },
				sm: { span: 8 }
			},
			wrapperCol: {
				xs: { span: 24 },
				sm: { span: 16 }
			}
		};
		const tailFormItemLayout = {
			wrapperCol: {
				xs: {
					span: 24,
					offset: 0
				},
				sm: {
					span: 16,
					offset: 8
				}
			}
		};

		const websiteOptions = autoCompleteResult.map(website => (
			<AutoCompleteOption key={website}>{website}</AutoCompleteOption>
		));

		let display;

		display = (
			<div
				className="SignIn-container"
				style={{
					transform: this.props.show
						? "translate(-50%, -50%)"
						: "translateY(-1000vh)",
					opacity: this.props.show ? "1" : "0"
				}}
			>
				<Form {...formItemLayout} onSubmit={this.handleSubmit}>
					<Form.Item label="E-mail">
						{getFieldDecorator("email", {
							rules: [
								{
									type: "email",
									message: "The input is not valid E-mail!"
								},
								{
									required: true,
									message: "Please input your E-mail!"
								}
							]
						})(<Input />)}
					</Form.Item>
					<Form.Item label="Password" hasFeedback>
						{getFieldDecorator("password", {
							rules: [
								{
									required: true,
									message: "Please input your password!"
								},
								{
									validator: this.validateToNextPassword
								}
							]
						})(<Input.Password />)}
					</Form.Item>
					<Form.Item label="Confirm Password" hasFeedback>
						{getFieldDecorator("confirm", {
							rules: [
								{
									required: true,
									message: "Please confirm your password!"
								},
								{
									validator: this.compareToFirstPassword
								}
							]
						})(<Input.Password onBlur={this.handleConfirmBlur} />)}
					</Form.Item>
					<Form.Item
						label={
							<span>
								Username&nbsp;
								<Tooltip title="Your username">
									<Icon type="question-circle-o" />
								</Tooltip>
							</span>
						}
					>
						{getFieldDecorator("username", {
							rules: [
								{
									required: true,
									message: "Please input your username!",
									whitespace: true
								}
							]
						})(<Input />)}
					</Form.Item>
					<Form.Item {...tailFormItemLayout}>
						{getFieldDecorator("agreement", {
							valuePropName: "checked"
						})(
							<Checkbox>
								I have read the <a href="">agreement</a>
							</Checkbox>
						)}
					</Form.Item>
					<Form.Item {...tailFormItemLayout}>
						<Button type="primary" htmlType="submit">
							Register
						</Button>
						<Button
							type="danger"
							onClick={this.props.hideSignIn}
							style={{ marginLeft: "1rem" }}
						>
							Cancel
						</Button>
					</Form.Item>
				</Form>
			</div>
		);

		return display;
	}
}

const WrappedRegistrationForm = Form.create({ name: "register" })(
	RegistrationForm
);

const mapStateToProps = state => {
	return {
		users: state.users.usersInfor
	};
};

const mapDispatchToProps = dispatch => {
	return {
		addUser: user => dispatch({ type: actionTypes.ADD_USER, user: user })
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(WrappedRegistrationForm);
