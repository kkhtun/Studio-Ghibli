import React, { useState, useEffect } from "react";
import CardWrapper from "../cards/CardWrapper";
import VehicleCard from "../cards/VehicleCard";
import Loading from "../../assets/images/loading.gif";

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://ghibliapi.herokuapp.com/vehicles")
      .then((res) => res.json())
      .then((data) => {
        setVehicles(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {isLoading && (
        <img src={Loading} alt="Fetching Data..." className="loading" />
      )}
      {vehicles &&
        !isLoading &&
        vehicles.map((vehicle) => (
          <CardWrapper key={vehicle.id}>
            <VehicleCard vehicle={vehicle} />
          </CardWrapper>
        ))}
    </>
  );
};

export default Vehicles;
