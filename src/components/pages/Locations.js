import React, { useState, useEffect } from "react";
import CardWrapper from "../CardWrapper";
import Loading from "../../assets/images/loading.gif";
import LocationCard from "../LocationCard";

const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://ghibliapi.herokuapp.com/locations")
      .then((res) => res.json())
      .then((data) => {
        setLocations(data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      {isLoading && (
        <img src={Loading} alt="Fetching Data..." className="loading" />
      )}
      {locations &&
        !isLoading &&
        locations.map((location) => (
          <CardWrapper key={location.id}>
            <LocationCard location={location} />
          </CardWrapper>
        ))}
    </>
  );
};

export default Locations;
