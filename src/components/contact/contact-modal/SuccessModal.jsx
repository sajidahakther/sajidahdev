import React from "react";
import "./modal.sass";

const successModal = (props) => (
  <div className="success__modal">
    <h3>Thank you!</h3>
    <p>
      Your message has been sent. I will get back to you very soon.
    </p>
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

export default successModal;
