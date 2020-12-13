import React from "react";
import Modal from "react-modal";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SignUpModal = (props) => {
  const customStyles = {
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

  Modal.setAppElement("#root");

  return (
    <div>
      <Modal
        isOpen={props.signUpModalIsOpen}
        onRequestClose={(event) => props.onSignUp(event)}
        shouldCloseOnOverlayClick={true}
        style={customStyles}
        contentLabel="SignUpModal"
      >
        <h2 className="mb-5">Sign up</h2>
        <Form>
          <Form.Group controlId="formFullName" className="mt-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="First name" />
            <Form.Control
              type="text"
              placeholder="Last name"
              className="mt-3"
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail" className="mt-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            <Form.Control
              type="password"
              placeholder="Confirm password"
              className="mt-3"
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Phone number</Form.Label>
            <Form.Control type="tel" placeholder="Enter phone number" />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-4 float-right">
            Sign Up
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default SignUpModal;
