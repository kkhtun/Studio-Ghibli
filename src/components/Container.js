import React, { useState, useEffect } from "react";
import Card from "./Card";
import Loading from "../assets/images/loading.gif";

const Container = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((data) => {
        setFilms(data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className="container">
      {isLoading && (
        <img src={Loading} alt="Fetching Data..." className="loading" />
      )}
      {films &&
        !isLoading &&
        films.map((film) => <Card film={film} key={film.id} />)}
    </main>
  );
};

export default Container;
