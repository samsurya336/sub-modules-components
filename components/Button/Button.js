import React from "react";
import "./Buttons.css";

function Button(props) {
	return (
		<div>
			<button onClick={props.onClick} className="ripple-button">
				{props.title}
			</button>
		</div>
	);
}

export default Button;
