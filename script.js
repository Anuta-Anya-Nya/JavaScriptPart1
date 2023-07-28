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

// function declinationOfNumber(count, one, two, five) {
//     switch (count) {
//         case 1:
//             return one;
//         case 2:
//         case 3:
//         case 4:
//             return two;

//         default:
//             return five;
//     }
// }

// // Число яблок, можно пробовать поставить свое целое, положительное число.
// const applesNumber = 100;
// // Получаем от функции одно из слов "яблоко", "яблока" или "яблок".
// const word = declinationOfNumber(applesNumber, "яблоко", "яблока", "яблок");
// // Выводим корректную строку, например:
// // "У меня есть 1 яблоко."
// // "У меня есть 2 яблока."
// // "У меня есть 5 яблок."
// // При любом целом, положительном числе в applesNumber, строка, которая
// // выводится в console.log, должна иметь правильное склонение слова "яблоко".
// console.log(`У меня есть ${applesNumber} ${word}.`);

// class Product {
//     constructor(nameProd, price) {
//       this.nameProd = nameProd;
//       this.price = price;
//     }
//     make25Discount() {
//       this.price = this.price * 0.75;
//     }
//   }
//   const prod1 = new Product("tsble", 1000);
//   console.log(prod1);
//   prod1.make25Discount();
//   console.log(prod1);

class Post {
    constructor(name, text) {
        this.name = name;
        this.text = text;
    }
    timePost = new Date();
    edit(textNew) {
        this.text = textNew;
        this.timePost = new Date();
    }
}
class AttachedPost extends Post {
    constructor(name, text) {
        super(name, text);
    }
    highlighted = false;
    makeTextHighlighted() {
        if (this.highlighted) {
            this.highlighted = false;
        } else {
            this.highlighted = true;
        }

    }
}
//   const myPost = new Post('Anna', "hello");
//   console.log(myPost);
//   myPost.edit("bye!");
//   console.log(myPost);
const myPost2 = new AttachedPost("roma", 'hi');
//   console.log(myPost2);
myPost2.makeTextHighlighted();
//   myPost2.edit('hey');
//   console.log(myPost2);
myPost2.makeTextHighlighted();
console.log(myPost2);