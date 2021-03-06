import React from "react";
import Modal from "react-modal";

import { Form, Button, Overlay, Tooltip } from "react-bootstrap";

import { createUserApi } from "../apis/apis";

class SignUpModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      type: "owner",
      email: "",
      password: "",
      passwordControl: "",
      phone: "",
      isAdmin: false,
      passwordsMatch: false,
      buttonDisabled: true,
    };

    this.customStyles = {
      overlay: {
        backgroundColor: "white",
        opacity: 0.95,
      },
      content: {
        top: "15%",
        left: "35%",
        right: "35%",
        bottom: "23%",
      },
    };

    this.target = React.createRef(null);

    Modal.setAppElement("#root");
  }

  handleBodyChange = (event) => {
    const {
      firstName,
      lastName,
      email,
      password,
      passwordControl,
      phone,
    } = this.state;
    event.preventDefault();

    if (
      firstName.length &&
      lastName.length &&
      email.length &&
      password.length &&
      passwordControl.length &&
      phone.length
    ) {
      this.setState({ buttonDisabled: false });
    } else this.setState({ buttonDisabled: true }); // Need to find a better way to disable the button (instant update...)

    if (event.target.id === "firstName")
      this.setState({ firstName: event.target.value });
    if (event.target.id === "lastName")
      this.setState({ lastName: event.target.value });
    if (event.target.id === "email")
      this.setState({ email: event.target.value });
    if (event.target.id === "password")
      this.setState({ password: event.target.value });
    if (event.target.id === "passwordControl")
      this.setState({ passwordControl: event.target.value });
    if (event.target.id === "phone")
      this.setState({ phone: event.target.value });
  };

  passwordMatch = (event) => {
    const { password, passwordControl } = this.state;
    event.preventDefault();
    if (password !== passwordControl) this.setState({ passwordsMatch: true });
    else this.setState({ passwordsMatch: false });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    if (!this.state.passwordsMatch) {
      createUserApi(this.state);
    }
  };

  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.signUpModalIsOpen}
          onRequestClose={(event) => this.props.onSignUp(event)}
          shouldCloseOnOverlayClick={true}
          style={this.customStyles}
          contentLabel="SignUpModal"
        >
          <h2 className="mb-5">Sign up</h2>
          <Form onSubmit={(event) => this.handleFormSubmit(event)}>
            <Form.Group className="mt-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First name"
                required
                maxLength="30"
                minLength="3"
                onInput={(event) => this.handleBodyChange(event)}
                id="firstName"
              />
              <Form.Control
                type="text"
                placeholder="Last name"
                required
                maxLength="30"
                minLength="3"
                className="mt-3"
                onInput={(event) => this.handleBodyChange(event)}
                id="lastName"
              />
            </Form.Group>
            <Form.Group controlId="email" className="mt-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                required
                onInput={(event) => this.handleBodyChange(event)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
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
              <Form.Control
                ref={this.target}
                type="password"
                placeholder="Confirm password"
                required
                maxLength="30"
                minLength="7"
                className="mt-3"
                onInput={(event) => this.handleBodyChange(event)}
                onBlur={(event) => this.passwordMatch(event)} //validate 2nd password matches. onBlur serves as 'onfocusout' in React
                id="passwordControl"
              />
              <Overlay
                target={this.target.current}
                show={this.state.passwordsMatch}
                placement="bottom"
              >
                {(props) => (
                  <Tooltip // Difficult to find information how to format this like the standard ones
                    id=""
                    {...props}
                    style={{
                      backgroundColor: "black",
                      padding: "2px 10px",
                      color: "white",
                      borderRadius: 3,
                      ...props.style,
                    }}
                  >
                    Passwords don't match
                  </Tooltip>
                )}
              </Overlay>
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter phone number"
                required
                maxLength="12"
                minLength="7"
                onInput={(event) => this.handleBodyChange(event)}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="mt-4 float-right"
              disabled={this.state.buttonDisabled}
            >
              Sign Up
            </Button>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default SignUpModal;
