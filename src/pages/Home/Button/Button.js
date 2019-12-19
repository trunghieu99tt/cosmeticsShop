import React from "react";
import { Button } from "antd";

import "./Button.css";

const ViewMoreButton = props => {
	return <button className="btn btn-primary viewmore">{props.text}</button>;
};

export default ViewMoreButton;
