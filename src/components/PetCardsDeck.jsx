import React from "react";

import CardDeck from "react-bootstrap/CardDeck";

import PetCard from "./PetCard";

const PetCardsDeck = (props) => {
  const petCards = [
    {
      petPic:
        "https://images.freeimages.com/images/small-previews/eca/new-pet-1381611.jpg",
      petName: "Petsy",
      petDescription:
        "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
      petId: "someId",
    },
    {
      petPic:
        "https://images.freeimages.com/images/small-previews/eca/new-pet-1381611.jpg",
      petName: "Petsy",
      petDescription:
        "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
      petId: "someId",
    },
    {
      petPic:
        "https://images.freeimages.com/images/small-previews/eca/new-pet-1381611.jpg",
      petName: "Petsy",
      petDescription:
        "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
      petId: "someId",
    },
    {
      petPic:
        "https://images.freeimages.com/images/small-previews/eca/new-pet-1381611.jpg",
      petName: "Petsy",
      petDescription:
        "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
      petId: "someId",
    },
  ];
  return (
    <CardDeck>
      {petCards.map((petCard) => (
        <PetCard
          petPic={petCard.petPic}
          petName={petCard.petName}
          petDescription={petCard.petDescription}
          petId={petCard.petId}
        />
      ))}
    </CardDeck>
  );
};

export default PetCardsDeck;
