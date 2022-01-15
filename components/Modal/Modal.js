import React, { useState, useEffect, useRef } from "react";
import "./Modal.css";

function Modal(props) {
	useEffect(() => {}, []);
	const [entranceAnimation, setEntranceAnimation] = useState(false);
	const childElementRef = useRef(null);

	const closeModal = () => {
		setEntranceAnimation(false);
		setTimeout(() => {
			props.onClickClose();
		}, 120);
	};

	useEffect(() => {
		if (props.show === true) {
			setEntranceAnimation(true);
		}
		if (props.closeModal) {
			props.closeModal(closeModal);
		}
	}, [props.show]);

	useEffect(() => {
		function handleClickOutside(event) {
			if (
				!(
					childElementRef.current &&
					childElementRef.current.children[0].contains(event.target)
				)
			) {
				closeModal();
			}
		}
		if (props.shouldCloseOnClickOutSide) {
			document.addEventListener("mousedown", handleClickOutside);
		}
		return () => {
			if (props.shouldCloseOnClickOutSide) {
				document.removeEventListener("mousedown", handleClickOutside);
			}
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [childElementRef]);

	const modalClassName = () => {
		if (props.type === "CENTER") {
			return `center-modal-wrapper ${
				entranceAnimation ? "center-modal-wrapper-enterance" : ""
			}`;
		} else if (props.type === "BOTTOM") {
			return `bottom-modal-wrapper ${
				entranceAnimation ? "bottom-modal-wrapper-enterance" : ""
			}`;
		} else {
			return `center-modal-wrapper ${
				entranceAnimation ? "center-modal-wrapper-enterance" : ""
			}`;
		}
	};

	return (
		<>
			{props.show && (
				<article className="modal-backdrop">
					<main className={modalClassName()} ref={childElementRef}>
						{props.children}
					</main>
				</article>
			)}
		</>
	);
}

export default Modal;
