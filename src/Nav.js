import React from "react";
import { Link } from "react-router-dom";

const defaultDogs = ["whisky", "duke", "perry", "tubby"];
function Nav({ dogs = defaultDogs }) {
  return (
    <ul>
      {dogs.map(dog => (
        <li key={dog}>
          <Link to={`/dogs/${dogs}`}>Show me the {dogs}!</Link>
        </li>
      ))}
    </ul>
  );
}


export default Nav;
