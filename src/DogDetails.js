// All the dog info shows
import React from 'react';
import { useParams } from 'react-router-dom';

const defaultDogs = [
    {
      name: "Whiskey",
      age: 5,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ];

function DogDetails() {
    const {name} = useParams();
    return(
        <>
            {defaultDogs.map(dog => (
                <ul>
                    {dog.name === name 
                    ? 
                    <>
                        <li>Dog Name: {dog.name}</li>
                        <li>Age: {dog.age}</li>
                        {dog.facts.map(fact => <li>{fact}</li>)}
                    </>
                    : null}
                </ul>
            ))}
        </>
    );
}

export default DogDetails;