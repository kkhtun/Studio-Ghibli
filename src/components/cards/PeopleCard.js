import React from "react";

const PeopleCard = ({ person }) => {
  const { name, age, gender, hair_color, eye_color } = person;
  return (
    <div className="person">
      <p>
        <strong>{name}</strong> is a {age}, {gender} with {hair_color} hair and{" "}
        {eye_color} eyes.
      </p>
    </div>
  );
};

export default PeopleCard;
