import React from "react";

import CardDeck from "react-bootstrap/CardDeck";
import PetCard from "./PetCard";

const PetCardsDeck = (props) => {
  if (props.petsArray) {
    return (
      <CardDeck>
        {props.petsArray.map((pet) => (
          <PetCard
            image={pet.image}
            name={pet.name}
            breed={pet.breed}
            status={pet.status}
            id={pet._id}
            key={pet._id}
          />
        ))}
      </CardDeck>
    );
  } else return null;
};

export default PetCardsDeck;
