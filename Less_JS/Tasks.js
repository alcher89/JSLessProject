const  a = 17,
b = 10,
c = (a-b),
d = 7;
const resuult = c+d;
console.log(resuult);


let arr = {
	'ru':['голубой', 'красный', 'зеленый'],
	'en':['blue', 'red', 'green'],
};
alert(arr['ru']);


let arrr = ['a', 'b', 'c'];
alert(arrr);


//Массивы
//Задача 1
var arr = ['Привет', 'Mir', '!'];
alert(arr[0] + arr[1] + arr[2]);

//Задача 2
let arr = ['Привет', 'Мир', '!'];
let text = arr[0] + arr[1] + arr[2];
console.log(text);
//Задача 3
let arr = ['Привет', 'Mir', '!'];
arr[0] = 'Poka'; 
console.log(arr);
//Задача 4
let obj = {'Коля':'1000', 'Вася':'500', 'Петя':'200'};
console.log(obj['Коля'], obj['Петя']);
//Задача 5 способы создание массива
let arr = [1, 2, 3, 4, 5];
console.log(arr);

let arr = [];
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[3] = 4;
arr[4] = 5;
console.log(arr);
//Задача 6 Многомерный массив

let arr = {
	'ru':['голубой', 'красный', 'зеленый'],
	'en':['blue', 'red', 'green'],
};
console.log(arr['ru']);
console.log(arr['ru'][0]);

// Задачи для решения по массивам
// Работа с массивами №1
let arr = ['a', 'b', 'c'];
console.log(arr[0],arr[2]);
console.log(arr);

let arr = ['a+', 'b', 'c', '+d'];
console.log(arr[0] + arr[1], arr[2] + arr[3]);

let arr = ['2', '5', '3', '9'];
const result = arr[0] * arr[1];
const result2 = arr[2] * arr[3];
console.log(result, result2);

let obj = {'a' : '1', 'b' : '2', 'c' : '3'};
console.log(obj.c);
console.log(obj['c']);

let obj = {Коля: '1000', Вася: '500', Петя: '200'};
console.log(obj.Коля, obj.Петя);

let obj = {
	первый: 'Понедельник',
	второй: 'Вторник',
	третей: 'Среда',
	четвертый: 'Черверг',
	пятый: 'Пятница'
};

let dey = {1:'первый'};
console.log(dey);

console.log(obj.первый, obj.второй);