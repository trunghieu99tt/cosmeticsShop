import React, { Component } from "react";
import { Row, Col, Icon, Menu, Dropdown, Button, Affix, Drawer } from "antd";

import "./Header.css";

export default class Header extends Component {
	state = { visible: false, placement: "left" };

	showDrawer = () => {
		this.setState({
			visible: true
		});
	};

	onClose = () => {
		this.setState({
			visible: false
		});
	};

	onChange = e => {
		this.setState({
			placement: e.target.value
		});
	};

	render() {
		const dropDownData = [
			[
				"Main Home",
				"Cosmetics Home",
				"Product Gallery",
				"Full screen Slider",
				"Skincare Home",
				"Landing"
			],
			["About Us", "Our Team", "FAQ Payback", "Comming soon", "Pricing"],
			["Standard", "Centered", "No Slidebar", "Post Type"]
		];

		const dataTitle = [
			"Home",
			"Pages",
			"Blog",
			"Shop",
			"Portfolio",
			"Contact"
		];

		const dropdowns = dropDownData.map((el, index) => {
			const dropDownList = el.map(e => (
				<Menu.Item>
					<div href={`/${e}`}>
						<a>{e}</a>
					</div>
				</Menu.Item>
			));
			const menu = <Menu>{dropDownList}</Menu>;
			return (
				<Dropdown overlay={menu}>
					<Button
						type="link"
						className="mainHeader__content--divs text-white"
					>
						{dataTitle[index]}
					</Button>
				</Dropdown>
			);
		});

		const normaldivs = dataTitle
			.filter((e, index) => index >= dropDownData.length)
			.map(e => (
				<div href={`/${e}`}>
					<a className="mainHeader__content--divs text-white text-center pl-2">
						{e}
					</a>
				</div>
			));

		return (
			<div>
				<Affix>
					<div className="bg-dark row">
						<div className="col-md-1 col-sm-3 offset-md-1 mainHeader__logo text-white">
							<Icon type="heart" />
							<h3 className="text-white pl-3">Wishlist</h3>
						</div>
						<div className="mainHeader__content col-md-6 offset-md-1">
							{dropdowns}
							<h3 className="text-capitalize font-weight-light text-white">
								biagiotti
							</h3>
							{normaldivs}
						</div>
						<div className="col-md-1 col-sm-3 text-white  mainHeader__logo--icons offset-md-1">
							<Icon type="search" />
							<Icon type="shopping" />
						</div>
					</div>
				</Affix>
				<Button
					type="primary"
					onClick={this.showDrawer}
					className="showMenu"
				>
					Menu
				</Button>
				<Drawer
					title="Menu"
					closable={false}
					onClose={this.onClose}
					visible={this.state.visible}
					className="text-dark"
				>
					<div className="d-flex flex-column">
						{dropdowns}
						{normaldivs}
					</div>
				</Drawer>
			</div>
		);
	}
}
