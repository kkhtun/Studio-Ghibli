import React, { useState, useEffect } from "react";
import Loading from "../../assets/images/loading.gif";
import CardWrapper from "../cards/CardWrapper";
import FilmCard from "../cards/FilmCard";

const Films = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((data) => {
        setFilms(data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      {isLoading && (
        <img src={Loading} alt="Fetching Data..." className="loading" />
      )}
      {films &&
        !isLoading &&
        films.map((film) => (
          <CardWrapper key={film.id}>
            <FilmCard film={film} />
          </CardWrapper>
        ))}
    </>
  );
};

export default Films;
