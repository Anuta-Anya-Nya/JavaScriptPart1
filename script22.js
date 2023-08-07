// Реализуйте класс Book, представляющий книгу, со следующими свойствами и
// методами:
// ● Свойство title (название) - строка, название книги.
// ● Свойство author (автор) - строка, имя автора книги.
// ● Свойство pages (количество страниц) - число, количество страниц в книге.
// 22
// ● Метод displayInfo() - выводит информацию о книге (название, автор и
// количество страниц).
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    displayInfo = () => {
        console.log(`Название книги: "${this.title}", автор: ${this.author}, количество страниц: ${this.pages}.`);
    }
}
const book1 = new Book('Анна Каренина', 'Л.Н.Толстой', '1111');
book1.displayInfo();

const book2 = new Book('Гарри Поттер и философский камень', 'Дж.Роулинг', '321');
book2.displayInfo();

// 2. Реализуйте класс Student, представляющий студента, со следующими свойствами и
// методами:
// ● Свойство name (имя) - строка, имя студента.
// ● Свойство age (возраст) - число, возраст студента.
// ● Свойство grade (класс) - строка, класс, в котором учится студент.
// ● Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).

class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    displayInfo = () => {
        console.log(`Вывод:\nName: ${this.name}\nAge: ${this.age}\nGrade: ${this.grade}`);
    }
}
const student1 = new Student("John Smith", 16, "10th grade");
student1.displayInfo();

const student2 = new Student("Jane Doe", 17, "11th grade");
student2.displayInfo();

// Создайте класс "Банк", который будет иметь следующие свойства: 
// название банка, список клиентов и список счетов. 
// Класс должен иметь методы для добавления нового клиента, 
// открытия нового счета для клиента, 
// пополнения счета, 
// снятия денег со счета и проверки баланса.
class Client {
    constructor(clientName, age) {
        this.clientName = clientName;
        this.age = age;
    }
    accountList = [];
}
class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    bankName = 'Мой Банк';
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount} into account ${this.accountNumber}. New balance: ${this.balance}`);
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log(`Insufficient funds in account ${this.accountNumber}`);
        }
        else {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} from account ${this.accountNumber}. New balance: ${this.balance}`);
        }
    }
    checkBalance(){
        return this.balance;
    }
}
class Bank {
    constructor(bankName) {
        this.bankName = bankName;
    }
    clientsList = [];
    accountList = [];
    addClient(client) {
        this.clientsList.push(client);
    }
    openAccount(numberAccount, client, amount) {
        // Генерация рандомного номера счета:
        // let numberAccount;
        // do {
        //     numberAccount = Math.floor(Math.random() * (10 ** 9));
        // }
        // while (this.accountList.find(el=>el.accountNumber === numberAccount));

        const bankAccount = new BankAccount(numberAccount, amount);
        this.accountList.push(bankAccount);
        client.accountList.push(bankAccount);
    }
    deposit(numberAcc, amount){
        this.accountList.find(el=>el.accountNumber === numberAcc).deposit(amount);
    }
    withdraw(numberAcc, amount){
        this.accountList.find(el=>el.accountNumber === numberAcc).withdraw(amount);
    }
    checkBalance(numberAcc){
        console.log(`Баланс на счете ${numberAcc} составляет ${this.accountList.find(el=>el.accountNumber === numberAcc).checkBalance()}`);        
    }

}

// Пример работы:

const bank = new Bank("Мой Банк");
const client1 = new Client("Иван", 25);
const client2 = new Client("Мария", 30);

bank.addClient(client1);
bank.addClient(client2);

bank.openAccount(975227793, client1, 1000);
bank.openAccount(683030063, client2, 500);
bank.deposit(975227793, 200);
bank.withdraw(683030063, 100);
bank.checkBalance(975227793);
bank.checkBalance(683030063);

console.log(bank.accountList);
console.log(client1.accountList);
console.log(client2.accountList);
