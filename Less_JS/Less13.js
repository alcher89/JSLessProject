"use strict";
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