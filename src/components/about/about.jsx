import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Heading from "../common/heading/heading";
import Accordion from "./accordion";
import "./about.sass";

const about = () => (
  <section className="about" id="about">
    <div className="wrapper">
      <Heading heading="About" />
      <Row between="lg">
        <Col md={12} lg={6} className="about__paragraph">
          <p className="serif">
            Software developer and designer based in London. Passionate about
            crafting beautiful digital experiences and building products that
            bring users value.
          </p>
          <p>
            I graduated from Goldsmıths, University of London studying Computer
            Science. Then joined a software company, designing websites,
            applications and digital editions for multiple media brands like GQ,
            Wired and Vogue. I have a love for learning and sharing knowledge.
            I've been teaching young kids coding for over two years. Leading
            workshops, bootcamps and classes at various schools across London. I
            believe coding is a powerful skill that enables us to bring any
            idea to life, encouraging us to become creators rather than
            consumers of the technology we use.
          </p>
        </Col>
        <Col md={12} lg={5}>
          <Accordion />
        </Col>
      </Row>
    </div>
  </section>
);

export default about;
