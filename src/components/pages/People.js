import React, { useState, useEffect } from "react";
import CardWrapper from "../cards/CardWrapper";
import Loading from "../../assets/images/loading.gif";
import PeopleCard from "../cards/PeopleCard";

const People = () => {
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((res) => res.json())
      .then((data) => {
        setPeople(data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      {isLoading && (
        <img src={Loading} alt="Fetching Data..." className="loading" />
      )}
      {people &&
        !isLoading &&
        people.map((person) => (
          <CardWrapper key={person.id}>
            <PeopleCard person={person} />
          </CardWrapper>
        ))}
    </>
  );
};

export default People;
