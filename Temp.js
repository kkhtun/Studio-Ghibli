//   const getAllPeople = async () => {
//     const res = await fetch("https://ghibliapi.herokuapp.com/people");
//     const data = await res.json();
//     return data;
//   };

//   const getAllFilms = async () => {
//     const res = await fetch("https://ghibliapi.herokuapp.com/films");
//     const data = await res.json();
//     return data;
//   };

//   const parseUrlToId = (str) => {
//     return str.slice(str.lastIndexOf("/") + 1);
//   };

//   const convertFilmsToId = (people) => {
//     people.map((person) => (person.films = parseUrlToId(person.films[0])));
//     return people;
//   };

//   const findInFilmData = (filmId, filmData) => {
//     const filmFound = filmData.find((film) => film.id === filmId);
//     return filmFound.title;
//   };
