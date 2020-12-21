import React from "react";

import { Button, Form, Row, Col } from "react-bootstrap";
import { createPetApi } from "../apis/apis";

class AdminAddPets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      status: "",
      type: "",
      breed: "",
      height: "",
      weight: "",
      color: "",
      dietaryRestrictions: "",
      hypoallergenic: false,
      image: "",
    };
  }

  componentDidMount() {
    console.log(this.state);
  }

  handleBodyChange = (event) => {
    event.preventDefault();
    if (event.target.id === "petName")
      this.setState({ name: event.target.value });
    if (event.target.id === "petStatus")
      this.setState({ status: event.target.value });
    if (event.target.id === "petType")
      this.setState({ type: event.target.value });
    if (event.target.id === "petBreed")
      this.setState({ breed: event.target.value });
    if (event.target.id === "petHeight")
      this.setState({ height: event.target.value });
    if (event.target.id === "petWeight")
      this.setState({ weight: event.target.value });
    if (event.target.id === "petColor")
      this.setState({ color: event.target.value });
    if (event.target.id === "petDiet")
      this.setState({ dietaryRestrictions: event.target.value });
    if (event.target.id === "petAllergies")
      this.setState({ hypoallergenic: event.target.checked });
    console.log(this.state);
  };

  handleFileUpload = (event) => {
    event.preventDefault();
    console.log(event.target.files);
    console.log(event.target.value);
    if (event.target.id === "petImage")
      this.setState({ image: event.target.value }); // needs multer on the backend!!!!
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    createPetApi(this.state);
    console.log(this.state);
  };

  render() {
    return (
      <Form
        className="w-50 mt-5 ml-5"
        onSubmit={(event) => this.handleFormSubmit(event)}
      >
        <div className="mb-4 text-left">
          <Form.Group as={Row} controlId="petName">
            <Form.Label column sm={2}>
              Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="E.g. Petsy"
                required
                value={this.state.name}
                onInput={(event) => this.handleBodyChange(event)}
              />
            </Col>
          </Form.Group>
        </div>

        <div className="mb-4 text-left">
          <Form.Group as={Row} controlId="petStatus" className="mt-3">
            <Form.Label column sm={2}>
              Status
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                as="select"
                type="text"
                required
                value={this.state.status}
                onInput={(event) => this.handleBodyChange(event)}
              >
                <option>Please select</option>
                <option>Available</option>
                <option>Fostered</option>
                <option>Adopted</option>
              </Form.Control>
            </Col>
          </Form.Group>
        </div>

        <div className="mb-4 text-left">
          <Form.Group as={Row} controlId="petType" className="mt-3">
            <Form.Label column sm={2}>
              Type
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="E.g. cat"
                required
                value={this.state.type}
                onInput={(event) => this.handleBodyChange(event)}
              />
            </Col>
          </Form.Group>
        </div>

        <div className="mb-4 text-left">
          <Form.Group as={Row} controlId="petBreed" className="mt-3">
            <Form.Label column sm={2}>
              Breed
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="E.g. Siamese"
                required
                value={this.state.breed}
                onInput={(event) => this.handleBodyChange(event)}
              />
            </Col>
          </Form.Group>
        </div>

        <div className="mb-4 text-left">
          <Form.Group as={Row} controlId="petHeight" className="mt-3">
            <Form.Label column sm={2}>
              Height
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="number"
                placeholder="E.g. 30 cm"
                required
                value={this.state.height}
                onInput={(event) => this.handleBodyChange(event)}
              />
            </Col>
          </Form.Group>
        </div>

        <div className="mb-4 text-left">
          <Form.Group as={Row} controlId="petWeight" className="mt-3">
            <Form.Label column sm={2}>
              Weight
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="number"
                placeholder="E.g. 30 kg"
                required
                value={this.state.weight}
                onInput={(event) => this.handleBodyChange(event)}
              />
            </Col>
          </Form.Group>
        </div>

        <div className="mb-4 text-left">
          <Form.Group as={Row} controlId="petColor" className="mt-3">
            <Form.Label column sm={2}>
              Color
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="E.g. white"
                required
                value={this.state.color}
                onInput={(event) => this.handleBodyChange(event)}
              />
            </Col>
          </Form.Group>
        </div>

        <div className="mb-4 text-left">
          <Form.Group as={Row} controlId="petDiet" className="mt-3">
            <Form.Label column sm={2}>
              Diet
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="E.g. No nuts"
                required
                value={this.state.dietaryRestrictions}
                onInput={(event) => this.handleBodyChange(event)}
              />
            </Col>
          </Form.Group>
        </div>

        <div className="mb-4 text-left">
          <Form.Group
            as={Row}
            controlId="petAllergies"
            className="mt-3 align-items-center"
          >
            <Form.Label column sm={2}>
              Hypoallergenic
            </Form.Label>
            <Col sm={10}>
              <Form.Check
                type="checkbox"
                label="Check to confirm"
                value={this.state.hypoallergenic}
                onInput={(event) => this.handleBodyChange(event)}
              />
            </Col>
          </Form.Group>
        </div>

        <div className="mb-4 text-left">
          <Form.Group as={Row} controlId="petImage" className="mt-3">
            <Form.Label column sm={2}>
              Image
            </Form.Label>
            <Form.File
              className="position-relative mt-1 ml-3"
              // required   // need to handle with multer on backend
              name="file"
              // onChange={handleChange}
              // isInvalid={!!errors.file}
              // feedback={errors.file}
              id="petImage"
              feedbackTooltip
              value={this.state.image}
              onChange={(event) => this.handleFileUpload(event)}
            />
          </Form.Group>
        </div>

        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button className="float-right" type="submit">
              Add Pet
            </Button>
          </Col>
        </Form.Group>
      </Form>
    );
  }
}

export default AdminAddPets;
