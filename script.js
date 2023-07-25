// Homework-1
// Task 1
// const tempC = 32;
// const tempF = (9 / 5) * tempC + 32;
// console.log(`Температура в градусах Цельсия: ${tempC}. 
// Температура в градусах Фаренгейта: ${tempF}.`);

// // Task 2
// const name = 'Anna';
// const admin = name;
// console.log(`Admin is ${admin}.`)

function declinationOfNumber(count, one, two, five) {
    switch (count) {
        case 1:
            return one;
        case 2:
        case 3:
        case 4:
            return two;

        default:
            return five;
    }
}

// Число яблок, можно пробовать поставить свое целое, положительное число.
const applesNumber = 100;
// Получаем от функции одно из слов "яблоко", "яблока" или "яблок".
const word = declinationOfNumber(applesNumber, "яблоко", "яблока", "яблок");
// Выводим корректную строку, например:
// "У меня есть 1 яблоко."
// "У меня есть 2 яблока."
// "У меня есть 5 яблок."
// При любом целом, положительном числе в applesNumber, строка, которая
// выводится в console.log, должна иметь правильное склонение слова "яблоко".
console.log(`У меня есть ${applesNumber} ${word}.`);