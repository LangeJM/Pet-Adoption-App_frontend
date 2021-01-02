import React from "react";
import { Redirect } from "react-router-dom";

import {
  ListGroup,
  Tab,
  Tabs,
  InputGroup,
  Button,
  FormControl,
  Badge,
  DropdownButton,
  Dropdown,
  Container,
  Row,
  Col,
} from "react-bootstrap";

import PetCardsDeck from "./PetCardsDeck";
import "./SearchPage.css";

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typeOfSearch: "basicSearch",
      petsSearchResult: [],
    };
  }

  switchTypeOfSearch(event) {
    let { typeOfSearch } = this.state;
    event.preventDefault();
    if (typeOfSearch === "Basic Search")
      this.setState({ typeOfSearch: "active" });
    else this.setState({ typeOfSearch: "Basic Search" });
  }

  render() {
    if (this.props.userObject.email) {
      return (
        <div>
          <Tabs
            id="controlled-tab-example"
            activeKey={this.state.typeOfSearch}
            onSelect={(k) => this.setState({ typeOfSearch: k })}
          >
            <Tab eventKey="basicSearch" title="Basic Search">
              <Container>
                <Row className="mt-3">
                  <Col md={4}>
                    <InputGroup size="sm">
                      <FormControl />

                      <DropdownButton
                        as={InputGroup.Append}
                        variant="outline-secondary"
                        title="Type"
                        id="input-group-dropdown-2"
                        className="labelWidth"
                      >
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">
                          Something else here
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#">Separated link</Dropdown.Item>
                      </DropdownButton>
                    </InputGroup>
                  </Col>
                  <Col md={1}>
                    <Button size="sm">Search</Button>
                  </Col>
                </Row>
              </Container>
              <div className="d-flex justify-content-center mt-3">
                <PetCardsDeck />
              </div>
            </Tab>

            <Tab eventKey="advancedSearch" title="Advanced Search">
              <Container>
                <Row className="mt-3">
                  <Col md={4}>
                    <InputGroup size="sm">
                      <FormControl />
                      <DropdownButton
                        as={InputGroup.Append}
                        variant="outline-secondary"
                        title="Type"
                        id="input-group-dropdown-2"
                        className="labelWidth"
                      >
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">
                          Something else here
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#">Separated link</Dropdown.Item>
                      </DropdownButton>
                    </InputGroup>
                  </Col>
                  <Col md={4}>
                    <InputGroup size="sm">
                      <FormControl />

                      <DropdownButton
                        as={InputGroup.Append}
                        variant="outline-secondary"
                        title="Status"
                        id="input-group-dropdown-2"
                        className="labelWidth"
                      >
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">
                          Something else here
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#">Separated link</Dropdown.Item>
                      </DropdownButton>
                    </InputGroup>
                  </Col>
                  <Col md={4}>
                    <InputGroup size="sm">
                      <FormControl />

                      <DropdownButton
                        as={InputGroup.Append}
                        variant="outline-secondary"
                        title="Height"
                        id="input-group-dropdown-2"
                        className="labelWidth"
                      >
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">
                          Something else here
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#">Separated link</Dropdown.Item>
                      </DropdownButton>
                    </InputGroup>
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col md={4}>
                    <InputGroup size="sm">
                      <FormControl />

                      <DropdownButton
                        as={InputGroup.Append}
                        variant="outline-secondary"
                        title="Weight"
                        id="input-group-dropdown-2"
                        className="labelWidth"
                      >
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">
                          Something else here
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#">Separated link</Dropdown.Item>
                      </DropdownButton>
                    </InputGroup>
                  </Col>
                  <Col md={4}>
                    <InputGroup size="sm">
                      <FormControl />

                      <DropdownButton
                        as={InputGroup.Append}
                        variant="outline-secondary"
                        title="Name"
                        id="input-group-dropdown-2"
                        className="labelWidth"
                      >
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">
                          Something else here
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#">Separated link</Dropdown.Item>
                      </DropdownButton>
                    </InputGroup>
                  </Col>
                  <Col md={1}>
                    <Button size="sm">Search</Button>
                  </Col>
                </Row>
              </Container>
              <div className="d-flex justify-content-center mt-3">
                <PetCardsDeck petsArray={this.state.petsSearchResult} />
              </div>
            </Tab>
          </Tabs>
        </div>
      );
    } else return <Redirect to="/" />;
  }
}

export default SearchPage;
