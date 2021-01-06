import React from "react";

import PetDetailsModal from "./PetDetailsModal";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class PetCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      props,
      petDetailsModalIsOpen: false,
    };
  }

  startsWithVowel(word) {
    // https://stackoverflow.com/a/59523871/12754665
    const vowels = "aeiouAEIOU";
    return vowels.indexOf(word[0]) !== -1;
  }

  petsDetails(event) {
    if (!this.props.userObject.email) {
      alert(
        `Please log in or sign up a new account to see details and adopt pets!`
      );
    }
    if (window.location.pathname === "/") window.location.assign("/search");
    else {
      if (this.state.petDetailsModalIsOpen)
        this.setState({ petDetailsModalIsOpen: false });
      else this.setState({ petDetailsModalIsOpen: true });
    }
  }

  render() {
    const { pet } = this.props;
    let indefiniteArticle = "";

    if (this.startsWithVowel(pet.breed)) indefiniteArticle = "an";
    else indefiniteArticle = "a";

    return (
      <div className="mb-4">
        <Card style={{ width: "18rem" }} className="overflow-hidden">
          <div
            style={{
              width: "18rem",
              height: "12rem",
              borderBottom: "solid #DFDFDF 1px",
            }}
            className="overflow-hidden"
          >
            <Card.Img
              variant="top"
              src={`${pet.image}?text=Image of ${indefiniteArticle} ${pet.breed}`}
              className="img-fluid"
            />
          </div>
          <Card.Body className="text-left">
            <Card.Title>{pet.name}</Card.Title>
            <Card.Text>
              {pet.name} is {indefiniteArticle} {pet.breed}. <br />
              Status: <b>{pet.status}</b>.
            </Card.Text>
            <Button
              className="mt-1 float-right"
              variant="primary"
              onClick={(event) => this.petsDetails(event)}
            >
              More
            </Button>
          </Card.Body>
          {/* <Card.Body>
          <Card.Link href="#">More</Card.Link>
        </Card.Body> */}
        </Card>
        <PetDetailsModal
          pet={this.state.props}
          petDetailsModalIsOpen={this.state.petDetailsModalIsOpen}
          petsDetails={(event) => this.petsDetails(event)}
          userObject={this.props.userObject}
          onUserPetsChange={this.props.onUserPetsChange}
        />
      </div>
    );
  }
}

export default PetCard;
