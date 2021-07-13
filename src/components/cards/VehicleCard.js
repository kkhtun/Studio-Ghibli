import React from "react";

const VehicleCard = ({ vehicle }) => {
  const { name, description, vehicle_class, length } = vehicle;
  return (
    <div className="vehicle">
      <h2>{name}</h2>
      <div>
        <p>is {description}</p>
        <pre>
          Class&nbsp; : <span>{vehicle_class}</span>
        </pre>
        <pre>
          Length : <span>{length} ft</span>
        </pre>
      </div>
    </div>
  );
};

export default VehicleCard;
