"use strict";
//Типы данных в JS

//ПРОСТЫЕ ТИПЫ
//Тип Число:
let number = 4.5;
console.log(4/0); // результат infiniti бесконечность, это числовой тип данных и относится к примитивных числам
console.log('string' * 9); // результат Nan не число
//Тип строка:
const persone = '5'; //в ковычках всегда обозначаются строки
//Тип логические данные или будиновые значения:
const bool = true;
//Тип данных null & undefined
console.log(something); //тут результат в консоле браузера выдаст null
//undefined это когда что то существует но у него нет какого либо значения
let und;
console.log(und);
//ОБЪЕКТЫ это ключевая единица JS в нем будет много храниться информации
const obj = {
    name: 'Alex',
    age: 24,
    isMaried: true
};
console.log(obj.name);
// Часный случай объектов это массив
let arr =['plum0.png', 'plum1.png',6, 'plum3.png']; //нумирация всегда начинается с ноля 0
console.log(arr[1]);