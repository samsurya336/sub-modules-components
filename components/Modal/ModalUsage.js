import React, { useRef, useState } from "react";
import Button from "../Button/Button";
import Modal from "./Modal";

function ModalUsage() {
	const [showCenterModal, setshowCenterModal] = useState(false);
	const [showBottomModal, setshowBottomModal] = useState(false);
	const closeModalRef = useRef(null);

	return (
		<div id="modalusage">
			<Button
				title={"Open Center Modal"}
				onClick={() => {
					setshowCenterModal(true);
				}}
			/>
			<Button
				title={"Open Bottom Modal"}
				onClick={() => {
					setshowBottomModal(true);
				}}
			/>

			{showCenterModal === true && (
				<Modal
					type="CENTER"
					show={showCenterModal}
					onClickClose={() => {
						setshowCenterModal(false);
					}}
					shouldCloseOnClickOutSide
				>
					<div
						style={{
							height: "500px",
							width: "100%",
							backgroundColor: "blue",
							margin: "5em",
							marginBottom: "0",
							borderRadius: "1em"
						}}
						onClick={(event) => {
							// event.stopPropagation();
							console.log("Preventaed");
						}}
					>
						Center Modal
					</div>
					<Button
						title={"Close Modal"}
						onClick={() => {
							setshowBottomModal(false);
						}}
					/>
				</Modal>
			)}

			{showBottomModal === true && (
				<Modal
					show={showBottomModal}
					type={"BOTTOM"}
					onClickClose={() => {
						setshowBottomModal(false);
					}}
					closeModal={(closeModal) => {
						closeModalRef.current = closeModal;
					}}
				>
					<div
						style={{
							height: "300px",
							width: "100%",
							backgroundColor: "red",
							margin: "5em",
							marginBottom: "0",
							borderRadius: "1em"
						}}
					>
						Bottom Modal
					</div>
					<Button
						title={"Close Modal"}
						onClick={() => {
							closeModalRef.current();
							// setshowBottomModal(false);
						}}
					/>
				</Modal>
			)}
		</div>
	);
}

export default ModalUsage;
