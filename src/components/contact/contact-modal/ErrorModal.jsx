import React from "react";
import "./modal.sass";

const errorModal = (props) => (
  <div className="error__modal">
    <h3>Oops!</h3>
    <p>An error occured, your message was not delivered.</p>
    <div
      role="button"
      tabIndex={0}
      className="modal__button flex-center"
      onClick={props.closeModal}
      onKeyDown={props.closeModal}
    >
      <p>Okay</p>
    </div>
  </div>
);

export default errorModal;
