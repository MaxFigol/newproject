"use strict";

const numberOfFilms = +prompt('Сколько вы фильмов посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// let a = prompt('Один из просмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?', ''),
//     c = prompt('Один из просмотренных фильмов?', ''),
//     d = prompt('На сколько оцените его?', '');


for(let i = 0; i < 2; i++){
    let a = prompt('Один из просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', '');
    personalMovieDB.movies[a] = b;
}
// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
if (numberOfFilms < 10) {
    console.log("Вы мало посмотрели фильмов");
} else {
    console.log("Вы киноман");
}
console.log(personalMovieDB);
