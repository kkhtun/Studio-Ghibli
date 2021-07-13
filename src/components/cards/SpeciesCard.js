import React from "react";

const SpeciesCard = ({ spec }) => {
  const { name, classification, eye_colors, hair_colors } = spec;
  return (
    <div className="species">
      <table>
        <thead>
          <tr>
            <td colSpan="2">
              <span>"{name}"</span> identified by
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span>classification</span> of
            </td>
            <td>{classification}</td>
          </tr>
          <tr>
            <td>
              having <span>eye colors</span>,
            </td>
            <td>{eye_colors}</td>
          </tr>
          <tr>
            <td>
              and <span>hair colors</span>,
            </td>
            <td>{hair_colors}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SpeciesCard;
