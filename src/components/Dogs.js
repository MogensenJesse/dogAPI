import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";

const Dogs = () => {
  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    async function fetchDogs() {
      const results = await axios.get("https://api.thedogapi.com/v1/breeds");
      setDogs(results.data);
      console.log(results.data)
    }
    fetchDogs();
    
  }, []);

  return (
    <div className="container">
      {dogs.map((dog) => (
        <Link key={dog.name} to={`/${dog.name}`}>
          <div className="dogLink">
            <img className="image" src={dog.image.url}></img>
            <span>{dog.name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Dogs;
