// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

for (let i = 0; i < 11; i++) {
    if (i === 0) {
        console.log(`${i} - это ноль`);
    } else if (i % 2 === 0) {
        console.log(`${i} - это четное число`);
    } else {
        console.log(`${i} - это нечетное число`);
    }
}

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]
const array = [1, 2, 3, 4, 5, 6, 7];
array.splice(3, 2);
console.log(array);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

function createArr(length) {
    const numbers = [];
    for (let count = 0; count < length; count++) {
        numbers[count] = Math.floor(Math.random() * 10);
    }
    return numbers;
}
function findMin(arr) {
    let min = arr[0];
    arr.forEach(element => {
        if (element < min) {
            min = element;
        }
    });
    return min;
}
function isInclude(arr, number) {
    if (arr.includes(number)) {
        console.log(`В массиве содержится число ${number}`);
    } else {
        console.log(`В массиве не содержится число ${number}`);
    }
}

const numbers = createArr(5);
console.log(numbers);
console.log(findMin(numbers));
isInclude(numbers, 3);

// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

for (let i = 1; i <= 20; i++) {
    let string = '';
    for (let j = 0; j < i; j++) {
        string += 'X';
    }
    console.log(string);
}


