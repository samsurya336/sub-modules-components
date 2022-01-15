import React, { useEffect, useRef, useState } from "react";
import "./InputBox.css";

function InputBox(props) {
	const label = useRef(null);
	const [error, seterror] = useState("");
	const [value, setValue] = useState(null);

	const handleTextInput = (event) => {
		setValue(event.target.value);
		if (props.onChange) {
			props.onChange(event);
		}
		if (props.validate) {
			if (error.trim().length > 0) {
				seterror("");
			}
			//Validate return true if is valid
			if (!props.validate(event)) {
				console.log("Valodate Error");
				seterror("Phone Number should be 13 digits");
			} else {
				if (error.trim()) {
					seterror("");
				}
			}
		}
	};

	return (
		<>
			<div className=" width-100-percentage ">
				<div className="input-box-wrapper">
					<label htmlFor={"firstInput"} ref={label} className="input-label">
						Dummy Input
					</label>
					<input
						name="firstInput"
						id="firstInput"
						className="input-box width-100-percentage"
						onFocus={() => {
							if (label.current.classList) {
								label.current.classList.add("active");
							}
						}}
						onBlur={(event) => {
							if (!(value && `${value}`.length !== 0)) {
								label.current.classList.remove("active");
							}
						}}
						onChange={handleTextInput}
						// readOnly={props.disabled}
						// required
					/>
				</div>
				<div className="width-100-percentage">
					<p>{error}</p>
				</div>
			</div>
		</>
	);
}

export default InputBox;
