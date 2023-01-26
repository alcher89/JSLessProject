"use strict";
const number0fFilms = 'Сколько фильмов вы уже посмотрели';
const personalMovieDB = {
count: 'number0fFilms',
movies: {},
actors: {},
genres: [],
privat: false
};
const userquertions = {
    querstions1: ['Один из последних просмотренных фильмов?'],
    querstions2: ['На сколько оценивайте его?']
};
let movies = {
    querstions1: 'Властелин колец',
    querstions2: '10'
};
// Ответ
const number0fFilms = +prompt('Сколько фильмов вы уже посмотрели', ''); // унарный + перед promt переводит значение в число
const personalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
    };
const a = prompt('Сколько фильмов вы уже посмотрели', ''),
b = prompt('На сколько оценивайте его?', ''),
c = prompt('Один из последних просмотренных фильмов?', ''),
d = prompt('На сколько оценивайте его?', '');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);