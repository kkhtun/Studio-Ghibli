import React from "react";

const LocationCard = ({ location }) => {
  const { name, climate, terrain, surface_water } = location;
  return (
    <>
      <table className="location-table">
        <tbody>
          <tr>
            <td>Location</td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>Climate</td>
            <td>{climate}</td>
          </tr>
          <tr>
            <td>Terrain</td>
            <td>{terrain}</td>
          </tr>
          <tr>
            <td>Surface Water</td>
            <td>{surface_water} %</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default LocationCard;
