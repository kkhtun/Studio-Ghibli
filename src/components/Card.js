import React from "react";

const Card = ({ film }) => {
  const { title, director, release_date, description } = film;
  return (
    <div className="card">
      <div className="card-wrapper">
        <h2>{title}</h2>
        <p>{description}</p>
        <strong>Director: {director}</strong>
        <i>Year {release_date}</i>
      </div>
    </div>
  );
};

export default Card;
