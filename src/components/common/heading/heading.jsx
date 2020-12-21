import React from "react";
import "./heading.sass";

const heading = (props) => (
  <div className="section-heading">
    <h1>{props.heading}</h1>
  </div>
);

export default heading;
