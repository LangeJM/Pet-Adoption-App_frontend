import React from "react";

import CardDeck from "react-bootstrap/CardDeck";
import PetCard from "./PetCard";

const PetCardsDeck = (props) => {
  if (props.petsArray) {
    return (
      <CardDeck>
        {props.petsArray.map((pet) => (
          <PetCard
            pet={pet}
            userObject={props.userObject}
            onUserPetsChange={props.onUserPetsChange}
          />
        ))}
      </CardDeck>
    );
  } else return null;
};

export default PetCardsDeck;
