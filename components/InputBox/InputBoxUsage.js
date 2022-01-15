import React from "react";
import InputBox from "./InputBox";

function InputBoxUsage() {
	return (
		<div className="flex-child-page-center hight-100-percentage width-100-percentage ">
			<div className="flex-child-page-center hight-100-percentage width-100-percentage ">
				<InputBox
					validate={(event) => {
						if (event && event.target.value && event.target.value.length >= 5) {
							return true;
						} else {
							return false;
						}
					}}
				/>
			</div>
		</div>
	);
}

export default InputBoxUsage;

// <div
// 					className={`group ${props.className ? props.className : ``}`}
// 					style={props.style}
// 				>
// 					<div className="flex-center-children-horizontally">
// 						{props.icon ? (
// 							<img
// 								className={`text-box-icon ${props.iconClassNames}`}
// 								style={{ width: "24px", height: "24px", marginRight: "6px" }}
// 								src={props.icon}
// 								alt=""
// 							/>
// 						) : null}
// 						<div style={{ width: "100%", position: "relative" }}>
// 							<label
// 								htmlFor={props.name}
// 								ref={label}
// 								className={`label-transition  font-size-medium padding-horizontal-default font-family-gilroy-medium font-color-tertiary font-weight-300 ${
// 									props.defaultValue ||
// 									props.type === "time" ||
// 									props.type === "date" ||
// 									value !== "" ||
// 									props.alwaysActive
// 										? "active font-size-small"
// 										: ""
// 								}`}
// 							>
// 								{props.label}
// 							</label>
// 							<input
// 								autoFocus={props.autoFocus ? true : false}
// 								defaultValue={props.defaultValue}
// 								className={`${
// 									error !== null
// 										? "font-size-medium font-family-gilroy-medium padding-top-larger padding-left-default padding-bottom-default border-radius-default inherit-parent-width background-white display-block border-red"
// 										: "text-box font-size-medium padding-top-larger padding-left-default padding-bottom-default display-block background-white inherit-parent-width border-radius-default font-family-gilroy-medium border-none"
// 								}
// 								${
// 									props.disabled
// 										? "box-shadow-none background-color-grey"
// 										: "box-shadow-default"
// 								}

// 								`}
// 								autoComplete={props.autoComplete}
// 								max={
// 									props.type === "date"
// 										? new Date().toISOString().split("T")[0]
// 										: null
// 								}
// 								onFocus={() => {
// 									if (label.current.classList) {
// 										label.current.classList.add("active");
// 									}
// 								}}
// 								onBlur={(event) => {
// 									if (
// 										!event.currentTarget.value &&
// 										props.type !== "date" &&
// 										props.type !== "time"
// 									)
// 										label.current.classList.remove("active");
// 									if (props.onOutOfFocus) {
// 										props.onOutOfFocus(event);
// 									}
// 								}}
// 								type={props.type}
// 								name={props.name}
// 								onChange={handleTextInput}
// 								readOnly={props.disabled}
// 								required
// 							/>

// 							{props.show === "otpButton" && (
// 								<button
// 									id={props.otpButtonId}
// 									type="submit"
// 									className="otp-button-background font-color-secondary font-family-gilroy-medium  padding-default absolute-center-self-vertically font-size-medium border-radius-default"
// 									onClick={props.onClickGetOtp}
// 									disabled={props.isOtpButtonDisabled}
// 									required
// 								>
// 									{props.otpButtonTitle ? props.otpButtonTitle : "Get OTP"}
// 								</button>
// 							)}
// 						</div>
// 					</div>
// 					{error && (
// 						<p className="font-size-smaller inherit-parent-width font-size-medium font-family-gilroy-medium font-color-red padding-top-default padding-left-small">
// 							{error}
// 						</p>
// 					)}
// 				</div>
