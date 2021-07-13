import React, { useState, useEffect } from "react";
import CardWrapper from "../cards/CardWrapper";
import SpeciesCard from "../cards/SpeciesCard";
import Loading from "../../assets/images/loading.gif";

const Species = () => {
  const [species, setSpecies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/species")
      .then((res) => res.json())
      .then((data) => {
        setSpecies(data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {isLoading && (
        <img src={Loading} alt="Fetching Data..." className="loading" />
      )}
      {species &&
        !isLoading &&
        species.map((spec) => (
          <CardWrapper key={spec.id}>
            <SpeciesCard spec={spec} />
          </CardWrapper>
        ))}
    </>
  );
};

export default Species;
