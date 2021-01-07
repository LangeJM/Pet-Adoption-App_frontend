import React from "react";
import { Redirect } from "react-router-dom";
import { getPetsBySearchApi } from "../apis/apis";
import Cookies from "js-cookie";

import {
  Tab,
  Tabs,
  InputGroup,
  Button,
  FormControl,
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
      searchParams: {
        type: "",
        status: "",
        height: "",
        weight: "",
        name: "",
      },
      petsSearchResult: [],
      petsArray: [],
      noResultsForSearch: false,
    };
  }

  switchTypeOfSearch(event) {
    let { typeOfSearch } = this.state;
    event.preventDefault();
    if (typeOfSearch === "Basic Search")
      this.setState({ typeOfSearch: "active" });
    else this.setState({ typeOfSearch: "Basic Search" });
  }

  handleSubmit(event) {
    event.preventDefault();
    let queryString = "?";
    const searchParams = this.state.searchParams;

    for (const key in searchParams) {
      if (searchParams[key] !== "")
        queryString = `${queryString}${key}=${searchParams[key]}&`;
    }
    getPetsBySearchApi(queryString)
      .then((res) => {
        if (!res.data.success) {
          this.setState({ petsArray: [] });
          this.setState({ noResultsForSearch: true });
        } else {
          this.setState({ petsArray: res.data.data });
          this.setState({ noResultsForSearch: false });
        }
      })
      .catch((err) => {
        this.setState({ petsArray: [] });
        this.setState({ noResultsForSearch: true });
        console.log(err);
      });
  }
  t;

  handleOnChange = (event) => {
    const id = event.target.id;
    let value = event.target.value;
    value = value.charAt(0).toUpperCase() + value.slice(1);
    event.preventDefault();
    if (id === "typeA" || id === "typeB") {
      this.setState({
        searchParams: { ...this.state.searchParams, type: value },
      });
    }
    if (id === "status")
      this.setState({
        searchParams: { ...this.state.searchParams, status: value },
      });
    if (id === "height")
      this.setState({
        searchParams: { ...this.state.searchParams, height: value },
      });
    if (id === "weight")
      this.setState({
        searchParams: { ...this.state.searchParams, weight: value },
      });
    if (id === "name")
      this.setState({
        searchParams: { ...this.state.searchParams, name: value },
      });
    console.log(this.state.searchParams);
  };

  render() {
    while (!this.props.userObject) {
      // Waiting for props to come in from parent
    }
    let petsDeckVisibility = "invisible";
    if (this.state.petsArray.length) petsDeckVisibility = "visible";

    if (Cookies.get("I-Pets") && this.props.userObject) {
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
                      <FormControl
                        onInput={(event) => this.handleOnChange(event)}
                        id="typeB"
                      />

                      <DropdownButton
                        as={InputGroup.Append}
                        variant="outline-secondary"
                        title="Type"
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
                    <Button
                      size="sm"
                      className="search-button"
                      onClick={(event) => this.handleSubmit(event)}
                    >
                      Search
                    </Button>
                  </Col>
                </Row>
              </Container>
              <div className="d-flex justify-content-center mt-3">
                {!this.state.noResultsForSearch ? (
                  <PetCardsDeck
                    userObject={this.props.userObject}
                    petsArray={this.state.petsSearchResult}
                  />
                ) : (
                  <div className="mt-5">No results found for your search</div>
                )}
              </div>
            </Tab>

            <Tab eventKey="advancedSearch" title="Advanced Search">
              <Container>
                <Row className="mt-3">
                  <Col md={4}>
                    <InputGroup size="sm">
                      <FormControl
                        onInput={(event) => this.handleOnChange(event)}
                        id="typeA"
                      />
                      <DropdownButton
                        as={InputGroup.Append}
                        variant="outline-secondary"
                        title="Type"
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
                      <FormControl
                        onInput={(event) => this.handleOnChange(event)}
                        id="status"
                      />

                      <DropdownButton
                        as={InputGroup.Append}
                        variant="outline-secondary"
                        title="Status"
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
                      <FormControl
                        onInput={(event) => this.handleOnChange(event)}
                        id="height"
                      />

                      <DropdownButton
                        as={InputGroup.Append}
                        variant="outline-secondary"
                        title="Height"
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
                      <FormControl
                        onInput={(event) => this.handleOnChange(event)}
                        id="weight"
                      />

                      <DropdownButton
                        as={InputGroup.Append}
                        variant="outline-secondary"
                        title="Weight"
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
                      <FormControl
                        onInput={(event) => this.handleOnChange(event)}
                        id="name"
                      />

                      <DropdownButton
                        as={InputGroup.Append}
                        variant="outline-secondary"
                        title="Name"
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
                    <Button
                      size="sm"
                      className="search-button mr-5 float-right"
                      onClick={(event) => this.handleSubmit(event)}
                    >
                      Search
                    </Button>
                  </Col>
                </Row>
              </Container>
              <div className="d-flex justify-content-center mt-3">
                <PetCardsDeck
                  userObject={this.props.userObject}
                  petsArray={this.state.petsSearchResult}
                  onUserPetsChange={this.props.onUserPetsChange}
                />
              </div>
            </Tab>
          </Tabs>
          <div
            className={`justify-content-center mt-5 border p-3 pb-0 bg-light ${petsDeckVisibility}`}
          >
            <PetCardsDeck
              petsArray={this.state.petsArray}
              userObject={this.props.userObject}
              onUserPetsChange={this.props.onUserPetsChange}
            />
          </div>
        </div>
      );
    } else {
      alert("Hi There");
      return <Redirect to="/" />;
    }
  }
}

export default SearchPage;
