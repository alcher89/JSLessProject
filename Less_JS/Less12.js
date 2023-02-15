"use strict";
alert('Hello'); //это базовые команды JS
const result = confirm('Are you here7');
console.log(result);


const answer = +prompt('Вам есть 18?', '11'); //если перед promt поставить + то это будет динамическая типизация тип данных будет число
console.log(answer); //что бы не ответил пользователь в переменную answer попадает тип данных строка
console.log(typeof(answer)); //что бы узнать какой тип данныхиспользуется мы используем переменную typeof


const answers = [];
answers[0] = prompt('Как ваше ?', '');
answers[1] = prompt('Как ваше фамиля ?', '');
answers[2] = prompt('Сколько вам лет ?', '');

// const result = confirm('are yon here&');
// console.log(result);
// const answer = prompt('вам есть 16', '12');
// console.log(typeof(answer));

const answers =[];
answers[0] = prompt('как ваше имя?','');
answers[1] = prompt('как ваше Фамилия?','');
answers[2] = prompt('как ваше отчество?','');
// document.write(answers); //вывод на экран все что лежит в переменной answers
console.log(typeof(answers)); // проверяем переменную answers на тип данных
console.log(typeof(null)); // осебенность которая осталось от старых стандартов она официально признана ошибкой