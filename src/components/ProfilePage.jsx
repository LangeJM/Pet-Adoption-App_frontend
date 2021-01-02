import React from "react";
import { Redirect } from "react-router-dom";
import "./ProfilePage.css";

import { Button, Tabs, Tab, Form, Row, Col } from "react-bootstrap";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (this.props.userObject.email) {
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
                    <Form.Control
                      type="text"
                      placeholder="First name"
                      required
                      value={this.props.userObject.firstName}
                    />
                  </Col>
                </Form.Group>
              </div>

              <div className="mb-5 text-left">
                <Form.Group
                  as={Row}
                  controlId="profileLastName"
                  className="mt-3"
                >
                  <Form.Label column sm={2}>
                    Last name
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="text"
                      placeholder="Last name"
                      required
                      value={this.props.userObject.lastName}
                    />
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
                      value={this.props.userObject.email}
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
                    <Form.Control
                      type="tel"
                      placeholder="Phone number"
                      required
                      value={this.props.userObject.phone}
                    />
                  </Col>
                </Form.Group>
              </div>

              <div className="mb-5 text-left">
                <Form.Group as={Row} controlId="profileEmail" className="mt-3">
                  <Form.Label column sm={2}>
                    Password
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      required
                      value={"somePassword"}
                    />
                  </Col>
                </Form.Group>
              </div>

              <div className="mb-5 text-left">
                <Form.Group as={Row} controlId="profileEmail" className="mt-3">
                  <Form.Label column sm={2}>
                    Bio
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      value={
                        this.props.userObject.bio
                          ? this.props.userObject.bio
                          : "Share a few words about yourself."
                      }
                    />
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
    } else return <Redirect to="/" />;
  }
}

export default ProfilePage;
