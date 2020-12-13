import React from "react";
import Modal from "react-modal";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SignInModal = (props) => {
  const customStyles = {
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

  return (
    <div>
      <Modal
        isOpen={props.signInModalIsOpen}
        onRequestClose={(event) => props.onLogIn(event)}
        shouldCloseOnOverlayClick={true}
        style={customStyles}
        contentLabel="SignInModal"
      >
        <h2 className="mb-5">Log in</h2>
        <Form>
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
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-4 float-right">
            Sign In
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default SignInModal;
