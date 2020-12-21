import React from "react";
import "./accordion.sass";

const accordion = () => (
  <div className="accordion">
    <div className="accordion__tab">
      <input type="checkbox" id="research-tab" className="accordion__input" />
      <label className="accordion__tab-label serif" htmlFor="research-tab">
        Research
      </label>
      <div className="accordion__tab-content">
        <p>
          Building products and services that align with users needs and
          expectations by carrying out research. Using methods ranging
          from surveys, interviews to task analysis and usability tests.
        </p>
      </div>
    </div>
    <div className="accordion__tab">
      <input type="checkbox" id="design-tab" className="accordion__input" />
      <label className="accordion__tab-label serif" htmlFor="design-tab">
        Design
      </label>
      <div className="accordion__tab-content">
        <p>
          Ideating design solutions and creating high-fidelity prototypes using
          Figma, Adobe XD, Invision or Sketch. Transforming design files into
          pixel-perfect stylesheets. Editing, creating graphics and ensuring visual consistency.
        </p>
      </div>
    </div>
    <div className="accordion__tab">
      <input type="checkbox" id="dev-tab" className="accordion__input" />
      <label className="accordion__tab-label serif" htmlFor="dev-tab">
        Development
      </label>
      <div className="accordion__tab-content">
        <p>
          Keeping up with the latest technologies and design trends to build
          beautiful, performant websites and applications. Testing compatibility
          across different browsers and devices to ensure a seamless user
          experience.
        </p>
      </div>
    </div>
    <div className="accordion__tab">
      <input type="checkbox" id="prod-tab" className="accordion__input" />
      <label className="accordion__tab-label serif" htmlFor="prod-tab">
        Production
      </label>
      <div className="accordion__tab-content">
        <p>Maintaining code and making continuous updates.</p>
      </div>
    </div>
  </div>
);

export default accordion;
