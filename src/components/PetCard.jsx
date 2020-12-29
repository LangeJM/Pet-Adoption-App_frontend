import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./PetCard.css";

const PetCard = (props) => {
  return (
    <div className="mb-4">
      <Card style={{ width: "18rem" }}>
        {/* Not sure what the images params are there for and whether they're needed */}
        <div
          style={{ width: "18rem", height: "12rem" }}
          className="overflow-hidden"
        >
          <Card.Img
            variant="top"
            src={`${props.image}?text=Image cap`}
            className={"img-fluid"}
          />
        </div>
        <Card.Body className="text-left">
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            {props.name} is a {props.breed}. <br />
            Status: <b>{props.status}</b>.
          </Card.Text>
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
