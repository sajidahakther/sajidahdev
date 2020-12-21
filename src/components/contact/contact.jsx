import React from "react";
import * as emailjs from "emailjs-com";
import { Row, Col } from "react-flexbox-grid"; 
import Heading from "../common/heading/heading";
import Modal from "./contact-modal/Modal";
import "./contact.sass";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      sending: false,
      successModal: false,
      errorModal: false,
    };
  }

  inputHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (e) => {
    var self = this;
    this.setState({ sending: true });
    e.preventDefault();

    var template_params = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };

    let SERVICE_ID = "Gmail";
    let TEMPLATE_ID = "template_qd025pa";
    let API_KEY = "user_scSWwnWVKICP43RBjVrna";

    emailjs.send(SERVICE_ID, TEMPLATE_ID, template_params, API_KEY).then(
      function (response) {
        if (response.status === 200) {
          self.showSuccessModal();
        } else {
          self.showErrorModal();
        }
      },
      function (error) {
        self.showErrorModal();
      }
    );
  };

  showSuccessModal = () => {
    this.setState({ successModal: true, sending: false });
    this.resetForm();
  };

  showErrorModal = () => {
    this.setState({ errorModal: true, sending: false });
    this.resetForm();
  };

  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }

  closeModal = () => {
    this.setState({ successModal: false, errorModal: false });
  };

  resetForm = () => {
    this.setState({ name: "", email: "", message: "" });
  };

  render() {
    let submitButtonRender = (
      <button aria-label="send message" type="submit" value="Send Message">
        Send
      </button>
    );
    if (this.state.sending) {
      submitButtonRender = (
        <div className="send-button">
          <div className="flex-center">
            <div className="loading"></div>
          </div>
        </div>
      );
    }
    let modalRender = null;
    if (this.state.successModal) {
      modalRender = <Modal closeModal={this.closeModal} status="success" />;
    } else if (this.state.errorModal) {
      modalRender = <Modal closeModal={this.closeModal} status="error" />;
    }
    return (
      <section className="contact" id="contact">
        {modalRender}
        <div className="wrapper">
          <Heading heading="Get in touch" />

          <Row between="lg">
            <Col md={12} lg={6}>
              <form id="contact-form" onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  placeholder="FULL NAME"
                  required
                  name="name"
                  value={this.state.name}
                  onChange={this.inputHandler}
                />
                <input
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  required
                  name="email"
                  value={this.state.email}
                  onChange={this.inputHandler}
                />
                <textarea
                  rows="6"
                  cols="50"
                  placeholder="YOUR MESSAGE"
                  required
                  name="message"
                  value={this.state.message}
                  onChange={this.inputHandler}
                ></textarea>
                {submitButtonRender}
              </form>
            </Col>
            <Col md={12} lg={5} className="socials">
              <h4>You can also find me on</h4>
              <div>
                <ul>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={"//www.github.com/sajidahakther"}
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={"//www.behance.com/sajidahakther"}
                    >
                      Behance
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={"//www.linkedin.com/in/sajidahakther"}
                    >
                      Linkedin
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    );
  }
}

export default Contact;
