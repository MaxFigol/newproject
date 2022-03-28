"use strict";



const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function(){
        personalMovieDB.count = +prompt('Сколько вы фильмов посмотрели?', '');
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('Сколько вы фильмов посмотрели?', '');
        }
    },
    question: function(){
        for(let i = 0; i < 2; i++){
            let a = prompt('Один из просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
            personalMovieDB.movies[a] = b;
        }
    },
    ratingProfile: function(){
        if (personalMovieDB.count < 10) {
            console.log("Вы мало посмотрели фильмов");
        } else {
            console.log("Вы киноман");
        }
    },
    showMyDB: function(hidden){
        if(!hidden) {
            console.log(personalMovieDB);
        }
    },
    toogleVisibleMyDB: function() {
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for(let i = 0; i<=2; i++){
            let genre = prompt(`Ващ любимый жанр под номером ${i + 1}`);
            if(genre == '' || genre == null){
                console.log('не ввели даные');
                i--;
            } else {
                personalMovieDB.genres[i] = genre;
            }
            
        }
        personalMovieDB.genres.forEach((item, i)=>{
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};


















