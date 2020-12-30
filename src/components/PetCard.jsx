import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./PetCard.css";

const PetCard = (props) => {
  function startsWithVowel(word) {
    // https://stackoverflow.com/a/59523871/12754665
    const vowels = "aeiouAEIOU";
    return vowels.indexOf(word[0]) !== -1;
  }

  let indefiniteArticle = "";
  if (startsWithVowel(props.breed)) indefiniteArticle = "an";
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
            src={`${props.image}?text=Image of ${indefiniteArticle} ${props.breed}`}
            className="img-fluid"
          />
        </div>
        <Card.Body className="text-left">
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            {props.name} is {indefiniteArticle} {props.breed}. <br />
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
