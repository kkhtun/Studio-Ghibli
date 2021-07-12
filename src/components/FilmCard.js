import React from "react";

const FilmCard = ({ film }) => {
  const { title, director, release_date, description } = film;
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
      <strong>Director: {director}</strong>
      <i>Year {release_date}</i>
    </>
  );
};

export default FilmCard;
