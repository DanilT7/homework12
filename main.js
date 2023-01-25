'use strict'

// 1.Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

// const myArray = [3, 4, 'hello', 5, 6, 'world', 7];

// function getAverage(array) {
//     let sum = 0;
//     let numberCount = 0;
//     for(let i = 0;i < array.length;i++) {
//         if(typeof array[i] === 'number') {
//             sum += array[i];
//             numberCount++;
//         } 
//     }
//     return sum / numberCount;
// }

// console.log(getAverage(myArray));

// 2.Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

// Перший варіант

// const firstNumber = Number(prompt('Vvedite x'))
// const secondNumber = Number(prompt('Vvedite y'));
// const znakNeravenstva = prompt('Vvedite znak neravenstva');

// function doMath(x, znak, y) {
//     if(znak === '^') {
//         return Math.pow(x,y)
//     } else {
//         return eval(`${x}${znak}${y}`);
//     }
// }

// const result = doMath(firstNumber,znakNeravenstva, secondNumber);
// console.log(result);

// Другий варіант

// const firstNumber = Number(prompt('Vvedite x'))
// const znakNeravenstva = prompt('Vvedite znak neravenstva');
// const secondNumber = Number(prompt('Vvedite y'));

// function doMath(x, znak, y) {
//     let num;
//     switch (znak) {
//         case '+':
//             return x + y;
//             break;
//         case '-':
//             return x - y;
//             break;
//         case '*':
//             return x * y;
//             break;
//         case '/':
//             return x / y;
//             break;
//         case '%':
//             return x % y;
//             break;
//         case '^':
//             return Math.pow(x, y);
//         default:
//             return 'You entered invalid znak'
//             break;
//     }
// }

// const result = doMath(firstNumber,znakNeravenstva, secondNumber);
// console.log(result);


// 3.Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

// const arr = [];
// const length = +prompt('Enter length for your main array');

// function create2DArray(amount) {
//     for (let i = 0; i < amount; i++) {
//         const strInside = prompt(`Enter elements for your ${i + 1} array`);
//             const arrInside = strInside.split(' ')
//         arr.push(arrInside);
//     }
//     return arr;
// }

// console.log(create2DArray(length));

// 4.Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

// const string = " hello world".trim();
// const array = ['l', 'd'];

// function func(str,letters) {
//     let arr = str.split('');
//     for(let i = 0;i < letters.length;i++) {
//         arr = arr.filter(e => e !== letters[i]);
// }
//     return arr.join('');
// }
// console.log(func(string, array));


