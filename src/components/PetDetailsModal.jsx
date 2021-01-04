import React from "react";
import Modal from "react-modal";

import { Form, Button, Row, Col } from "react-bootstrap";

import { createPetApi } from "../apis/apis";

class PetDetailsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.pet.pet.name,
      status: props.pet.pet.status,
      type: props.pet.pet.type,
      breed: props.pet.pet.breed,
      height: props.pet.pet.height,
      weight: props.pet.pet.weight,
      color: props.pet.pet.color,
      dietaryRestrictions: props.pet.pet.dietaryRestrictions,
      hypoallergenic: props.pet.pet.hypoallergenic,
      image: props.pet.pet.image,
      imageName: props.pet.pet.imageName,
      _id: props.pet.pet._id,
      savedBy: props.pet.pet.savedBy,
      // fileTypeWarning: "",
      isAdmin: props.userObject.isAdmin,
    };

    this.customStyles = {
      overlay: {
        backgroundColor: "white",
        opacity: 0.99,
      },
      content: {
        top: "1%",
        left: "25%",
        right: "25%",
        bottom: "1%",
      },
    };

    this.target = React.createRef(null);

    Modal.setAppElement("#root");
  }

  handleOnChange = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    event.preventDefault();
    if (id === "petName") this.setState({ name: value });
    if (id === "petStatus") this.setState({ status: value });
    if (id === "petType") this.setState({ type: value });
    if (id === "petBreed") this.setState({ breed: value });
    if (id === "petHeight")
      if (value.length < 8) this.setState({ height: value });
    if (id === "petWeight")
      if (value.length < 8) this.setState({ weight: value });
    if (id === "petColor") this.setState({ color: value });
    if (id === "petDiet") this.setState({ dietaryRestrictions: value });
    if (id === "petAllergies")
      this.setState({ hypoallergenic: event.target.checked });
    if (id === "petImage") {
      const allowedFileTypes = ["png", "jpg", "jpeg", "gif"];
      this.setState({ image: "", imageName: "" });
      if (allowedFileTypes.includes(value.split(".").pop())) {
        this.setState({
          image: event.target.files[0],
          imageName: value,
          fileTypeWarning: "",
        });
      } else {
        this.setState({
          fileTypeWarning: `Only pictures of the following format are supported: ${allowedFileTypes
            .map(function (el) {
              return el;
            })
            .join(", ")}`,
        });
      }
    }
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData();
    // data.append("name", this.state.name);
    // data.append("status", this.state.status);
    // data.append("type", this.state.type);
    // data.append("breed", this.state.breed);
    // data.append("height", this.state.height);
    // data.append("weight", this.state.weight);
    // data.append("color", this.state.color);
    // data.append("hypoallergenic", this.state.hypoallergenic);
    // data.append("dietaryRestrictions", this.state.dietaryRestrictions);
    // data.append("fosteredBy", this.state.fosteredBy);
    // data.append("savedBy", this.state.savedBy);
    // data.append("image", this.state.image);
    // data.append("imageName", this.state.imageName);
    // createPetApi(data);
  };

  render() {
    console.log("Modal isAdmin: ", this.state.isAdmin);
    console.log("Modal State: ", this.state);
    console.log("Modal Props: ", this.props);
    return (
      <div>
        <Modal
          isOpen={this.props.petDetailsModalIsOpen}
          onRequestClose={this.handleCloseModal}
          // shouldCloseOnOverlayClick={true}
          style={this.customStyles}
          contentLabel="SignUpModal"
        >
          {/* <h2 className="mb-5">Pet Details</h2> */}
          <div className="d-flex justify-content-center input-sm">
            <img
              src={this.state.image}
              className="img-fluid"
              style={{ width: "20rem" }}
              alt="animal pet"
            ></img>
          </div>
          <Form
            className="w-75 mt-5 ml-5"
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
                    readonly={!this.state.isAdmin}
                    // readOnly={true} this is with grey background
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

            {/* <div className="m-0 mb-4 text-left">
              <Form.Group as={Row} controlId="petImage" className="mb-0 mt-3">
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
              <Form.Label column sm={12} className="text-danger p-0 pt-1">
                {this.state.fileTypeWarning}
              </Form.Label>
            </div> */}

            <Form.Group as={Row}>
              <Col sm={{ span: 10, offset: 2 }}>
                {this.state.isAdmin && (
                  <Button className="float-right ml-2" type="submit">
                    Update Pet
                  </Button>
                )}
                {this.state.isAdmin && (
                  <Button
                    className="float-right ml-2"
                    onClick={this.props.petsDetails}
                  >
                    Cancel
                  </Button>
                )}
                <Button
                  className="float-right ml-2"
                  onClick={this.props.petsDetails}
                >
                  Back
                </Button>
                <Button className="float-right ml-2">Save</Button>
                <Button className="float-right ml-2">Foster</Button>
              </Col>
            </Form.Group>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default PetDetailsModal;
