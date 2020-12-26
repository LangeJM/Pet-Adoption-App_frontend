import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./PetCard.css";

const PetCard = (props) => {
  return (
    <div className="mb-4">
      <Card style={{ width: "18rem" }}>
        {/* Not sure what the images params are threre for and whether they're needed */}
        <Card.Img variant="top" src={`${props.petPic}?text=Image cap`} />
        <Card.Body className="text-left">
          <Card.Title>{props.petName}</Card.Title>
          <Card.Text>{props.petDescription}</Card.Text>
          <Button className="mt-1 float-right" variant="primary">
            More
          </Button>
        </Card.Body>
        {/* <Card.Body>
          <Card.Link href="#">More</Card.Link>
        </Card.Body> */}
      </Card>
    </div>
  );
};

export default PetCard;
