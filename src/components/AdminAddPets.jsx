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
      image: [],
      imageName: "",
    };
  }

  handleOnChange = (event) => {
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
      if (event.target.value.length < 8)
        this.setState({ height: event.target.value });
    if (event.target.id === "petWeight")
      if (event.target.value.length < 8)
        this.setState({ weight: event.target.value });
    if (event.target.id === "petColor")
      this.setState({ color: event.target.value });
    if (event.target.id === "petDiet")
      this.setState({ dietaryRestrictions: event.target.value });
    if (event.target.id === "petAllergies")
      this.setState({ hypoallergenic: event.target.checked });
    if (event.target.id === "petImage") {
      const allowedFileTypes = ["png", "jpg", "jpeg", "gif"];
      if (allowedFileTypes.includes(event.target.value.split(".").pop())) {
        this.setState({
          image: event.target.files[0],
          imageName: event.target.value,
        });
      } else {
        console.log("File type not supported."); // Need to show to user!!!
      }
    }
    console.log(this.state);
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("name", this.state.name);
    data.append("status", this.state.status);
    data.append("type", this.state.type);
    data.append("breed", this.state.breed);
    data.append("height", this.state.height);
    data.append("weight", this.state.weight);
    data.append("color", this.state.color);
    data.append("hypoallergenic", this.state.hypoallergenic);
    data.append("dietaryRestrictions", this.state.dietaryRestrictions);
    data.append("fosteredBy", this.state.fosteredBy);
    data.append("savedBy", this.state.savedBy);
    data.append("image", this.state.image);
    data.append("imageName", this.state.imageName);
    createPetApi(data);
  };

  /*
  this.state.petsData.map((pet, index) => {  
        const { name, status, type, breed, color, weight, height, _id } = pet;
        

      });
  */

  render() {
    return (
      <Form
        className="w-50 mt-5 ml-5"
        onSubmit={(event) => this.handleFormSubmit(event)}
      >
        <div className="mb-4 text-left">
          <Form.Group as={Row} controlId="petName">
            <Form.Label column sm={4}>
              Name
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                type="text"
                placeholder="E.g. Petsy"
                required
                maxLength="30"
                value={this.state.name}
                onInput={(event) => this.handleOnChange(event)}
              />
            </Col>
          </Form.Group>
        </div>

        <div className="mb-4 text-left">
          <Form.Group as={Row} controlId="petStatus" className="mt-3">
            <Form.Label column sm={4}>
              Status
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                as="select"
                type="text"
                required
                value={this.state.status}
                onInput={(event) => this.handleOnChange(event)}
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
            <Form.Label column sm={4}>
              Type
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                type="text"
                placeholder="E.g. cat"
                required
                maxLength="30"
                value={this.state.type}
                onInput={(event) => this.handleOnChange(event)}
              />
            </Col>
          </Form.Group>
        </div>

        <div className="mb-4 text-left">
          <Form.Group as={Row} controlId="petBreed" className="mt-3">
            <Form.Label column sm={4}>
              Breed
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                type="text"
                placeholder="E.g. Siamese"
                required
                maxLength="30"
                value={this.state.breed}
                onInput={(event) => this.handleOnChange(event)}
              />
            </Col>
          </Form.Group>
        </div>

        <div className="mb-4 text-left">
          <Form.Group as={Row} controlId="petHeight" className="mt-3">
            <Form.Label column sm={4}>
              Height
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                type="number"
                placeholder="E.g. 30 cm"
                required
                maxLength="7"
                value={this.state.height}
                onInput={(event) => this.handleOnChange(event)}
              />
            </Col>
          </Form.Group>
        </div>

        <div className="mb-4 text-left">
          <Form.Group as={Row} controlId="petWeight" className="mt-3">
            <Form.Label column sm={4}>
              Weight
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                type="number"
                placeholder="E.g. 30 kg"
                required
                maxLength="7"
                value={this.state.weight}
                onInput={(event) => this.handleOnChange(event)}
              />
            </Col>
          </Form.Group>
        </div>

        <div className="mb-4 text-left">
          <Form.Group as={Row} controlId="petColor" className="mt-3">
            <Form.Label column sm={4}>
              Color
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                type="text"
                placeholder="E.g. white"
                required
                maxLength="20"
                value={this.state.color}
                onInput={(event) => this.handleOnChange(event)}
              />
            </Col>
          </Form.Group>
        </div>

        <div className="mb-4 text-left">
          <Form.Group as={Row} controlId="petDiet" className="mt-3">
            <Form.Label column sm={4}>
              Dietary Restrictions
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                type="text"
                placeholder="E.g. No nuts"
                required
                maxLength="30"
                value={this.state.dietaryRestrictions}
                onInput={(event) => this.handleOnChange(event)}
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
            <Form.Label column sm={4}>
              Hypoallergenic
            </Form.Label>
            <Col sm={8}>
              <Form.Check
                type="checkbox"
                label="Check to confirm"
                value={this.state.hypoallergenic}
                onInput={(event) => this.handleOnChange(event)}
              />
            </Col>
          </Form.Group>
        </div>

        <div className="mb-4 text-left">
          <Form.Group as={Row} controlId="petImage" className="mt-3">
            <Form.Label column sm={4}>
              Image
            </Form.Label>
            <Form.File
              className="position-relative mt-1 ml-3"
              name="petImage"
              id="petImage"
              feedbackTooltip
              value={this.state.imageName}
              accept=".png, .jpg, .jpeg, .gif, .tif, .tiff"
              onChange={(event) => this.handleOnChange(event)}
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
