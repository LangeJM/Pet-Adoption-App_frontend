import React from "react";
import { Redirect } from "react-router-dom";
import "./ProfilePage.css";
import { updateUserApi } from "../apis/apis";

import { Button, Tabs, Tab, Form, Row, Col } from "react-bootstrap";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: props.userObject.firstName,
      lastName: props.userObject.lastName,
      email: props.userObject.email,
      phone: props.userObject.phone,
      bio: props.userObject.bio,
      id: props.userObject._id,
    };
  }

  handleOnChange = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    event.preventDefault();
    if (id === "profileFirstName") this.setState({ firstName: value });
    if (id === "profileLastName") this.setState({ lastName: value });
    if (id === "profileEmail") this.setState({ email: value });
    if (id === "profilePhone") this.setState({ phone: value });
    if (id === "profileBio") this.setState({ bio: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    console.log("Sending off the API req: ", this.state);
    updateUserApi(this.state);
  };

  render() {
    // console.log(this.state);
    if (this.props.userObject.email) {
      return (
        <Tabs activeKey={"profile"}>
          <Tab eventKey="profile" title="Profile">
            <Form
              className="w-50 mt-5 ml-5"
              onSubmit={(event) => this.handleFormSubmit(event)}
            >
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
                      value={this.state.firstName}
                      className="ml-3"
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
                      value={this.state.lastName}
                      onInput={(event) => this.handleOnChange(event)}
                      className="ml-3"
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
                      value={this.state.email}
                      onInput={(event) => this.handleOnChange(event)}
                      className="ml-3"
                    />
                  </Col>
                </Form.Group>
              </div>

              <div className="mb-5 text-left">
                <Form.Group as={Row} controlId="profilePhone" className="mt-3">
                  <Form.Label column sm={2}>
                    Phone
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="tel"
                      placeholder="Phone number"
                      required
                      value={this.state.phone}
                      onInput={(event) => this.handleOnChange(event)}
                      className="ml-3"
                    />
                  </Col>
                </Form.Group>
              </div>

              <div className="mb-5 text-left">
                <Form.Group
                  as={Row}
                  controlId="profilePassword"
                  className="mt-3"
                >
                  <Form.Label column sm={2}>
                    Password
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="password"
                      placeholder="***************"
                      required
                      readOnly
                      className="ml-3"
                    />
                  </Col>
                </Form.Group>
              </div>

              <div className="mb-5 text-left">
                <Form.Group as={Row} controlId="profileBio" className="mt-3">
                  <Form.Label column sm={2}>
                    Bio
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Share a few words about yourself"
                      value={this.state.bio ? this.state.bio : ""}
                      onInput={(event) => this.handleOnChange(event)}
                      className="ml-3"
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
