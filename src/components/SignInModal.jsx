import React from "react";
import Modal from "react-modal";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { loginUserApi } from "../apis/apis";

import Cookies from "js-cookie";

class SignInModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      buttonDisabled: true,
    };

    this.customStyles = {
      overlay: {
        backgroundColor: "white",
        opacity: 0.95,
      },
      content: {
        top: "25%",
        left: "35%",
        right: "35%",
        bottom: "35%",
      },
    };

    Modal.setAppElement("#root");
  }

  handleBodyChange(event) {
    event.preventDefault();
    const { email, password } = this.state;
    if (email.length && password.length)
      this.setState({ buttonDisabled: false });
    else this.setState({ buttonDisabled: true });

    if (event.target.id === "email")
      this.setState({ email: event.target.value });
    if (event.target.id === "password")
      this.setState({ password: event.target.value });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    loginUserApi(this.state);
  };

  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.signInModalIsOpen}
          onRequestClose={(event) => this.props.onLogIn(event)}
          shouldCloseOnOverlayClick={true}
          style={this.customStyles}
          contentLabel="SignInModal"
        >
          <h2 className="mb-5">Log in</h2>
          <Form onSubmit={(event) => this.handleFormSubmit(event)}>
            <Form.Group className="mt-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                required
                onInput={(event) => this.handleBodyChange(event)}
                id="email"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                required
                maxLength="30"
                minLength="7"
                onInput={(event) => this.handleBodyChange(event)}
                id="password"
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="mt-4 float-right"
              disabled={this.state.buttonDisabled}
            >
              Sign In
            </Button>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default SignInModal;
