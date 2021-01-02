import React from "react";

import CardDeck from "react-bootstrap/CardDeck";
import PetCard from "./PetCard";

const PetCardsDeck = (props) => {
  if (props.petsArray) {
    return (
      <CardDeck>
        {props.petsArray.map((sample) => (
          <PetCard
            image={sample.image}
            name={sample.name}
            breed={sample.breed}
            status={sample.status}
            key={sample._id}
          />
        ))}
      </CardDeck>
    );
  } else return null;
};

export default PetCardsDeck;
