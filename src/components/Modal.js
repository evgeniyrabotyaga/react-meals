import React, { Fragment } from "react";
import ReactDOM from "react-dom";

const Overlay = (props) => {
  return <div onClick={props.onClose} className="overlay"></div>;
};

const ModalWindow = (props) => {
  return (
    <div className="cart-modal">
      <div>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Overlay onClose={props.onClose} />,
        document.getElementById("cart-modal")
      )}
      {ReactDOM.createPortal(
        <ModalWindow>{props.children}</ModalWindow>,
        document.getElementById("cart-modal")
      )}
    </React.Fragment>
  );
};

export default Modal;
