"use strict";

let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Сколько вы фильмов посмотрели?', '');
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько вы фильмов посмотрели?', '');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function question(){
    for(let i = 0; i < 2; i++){
        let a = prompt('Один из просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');
        personalMovieDB.movies[a] = b;
    }
}

question();

function ratingProfile (){
    if (numberOfFilms < 10) {
        console.log("Вы мало посмотрели фильмов");
    } else {
        console.log("Вы киноман");
    }
}

ratingProfile();

function showMyDB(hidden){
    if(!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for(let i = 0; i<=2; i++){
        const genre = prompt(`Ващ любимый жанр под номером ${i + 1}`);
        personalMovieDB.genres[i] = genre;
    }
}

writeYourGenres();

