import React from "react";
import "./projectBox.sass";

const projectBox = (props) => (
  <div className="project__box">
    <img src={props.preview} alt="project" />
    <div className="project__hover-info flex-center">
      <div className="text-center">
        <p className="serif">{props.title}</p>
        <small>{props.tag}</small>
      </div>
    </div>
  </div>
);

export default projectBox;
