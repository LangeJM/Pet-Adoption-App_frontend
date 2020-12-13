import React from "react";
import "./ProfilePage.css";

import { Button, Tabs, Tab, Form, Row, Col } from "react-bootstrap";

const ProfilePage = (props) => {
  return (
    <Tabs activeKey={"profile"}>
      <Tab eventKey="profile" title="Profile">
        <Form className="w-50 mt-5 ml-5">
          <div className="mb-5 text-left">
            <Form.Group as={Row} controlId="profileFirstName">
              <Form.Label column sm={2}>
                First name
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="text" placeholder="First name" required />
              </Col>
            </Form.Group>
          </div>

          <div className="mb-5 text-left">
            <Form.Group as={Row} controlId="profileLastName" className="mt-3">
              <Form.Label column sm={2}>
                Last name
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="text" placeholder="Last name" required />
              </Col>
            </Form.Group>
          </div>

          <div className="mb-5 text-left">
            <Form.Group as={Row} controlId="profileEmail" className="mt-3">
              <Form.Label column sm={2}>
                Email
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="email"
                  placeholder="Email address"
                  required
                />
              </Col>
            </Form.Group>
          </div>

          <div className="mb-5 text-left">
            <Form.Group as={Row} controlId="profileEmail" className="mt-3">
              <Form.Label column sm={2}>
                Phone
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="tel" placeholder="Phone number" required />
              </Col>
            </Form.Group>
          </div>

          <div className="mb-5 text-left">
            <Form.Group as={Row} controlId="profileEmail" className="mt-3">
              <Form.Label column sm={2}>
                Password
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="password" placeholder="Password" required />
              </Col>
            </Form.Group>
          </div>

          <div className="mb-5 text-left">
            <Form.Group as={Row} controlId="profileEmail" className="mt-3">
              <Form.Label column sm={2}>
                Bio
              </Form.Label>
              <Col sm={10}>
                <Form.Control as="textarea" rows={5} />
              </Col>
            </Form.Group>
          </div>

          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button className="float-right" type="submit">
                Save changes
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Tab>
    </Tabs>
  );
};

export default ProfilePage;
