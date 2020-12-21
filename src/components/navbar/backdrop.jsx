import React from "react";

import "./navbar.sass";

const backdrop = (props) => (
  <div
    onClick={props.closeMobileMenu}
    className={`backdrop ${props.isOpen ? "backdrop__open" : ""}`}
  ></div>
);

export default backdrop;
