// All the dog info shows
import React from 'react';

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

function DogList({ dogs=defaultDogs }) {
  return (
    <ul>
      {dogs.map(dog => (
          <>
            <li>Name: {dog.name}</li>
            <li>Age: {dog.age}</li>
          </>
      ))}
    </ul>
  );
}

export default DogList;