/******************************************************************* */
// // Таски на условия
// // 1) Делится ли число на 5, или на 3, или на 2 без остатка?

// const number = +prompt("Enter a number");
// if(number % 5 == 0 || number % 3 == 0 || number % 2 == 0){
//     console.log("True");
// }else{
//     console.log("False");
// }



/******************************************************************* */
// // Таски на циклы (Only FOR)

// // 1) Вывести факториал запрошенного числа. (5!=1*2*3*4*5)


//     const num = +prompt("Enter a number")
//     let result = 1;
//     for(let i = num; i > 0; --i){
//         result *= i;
//     }
//     console.log( num +"! = " + result);


/******************************************************************* */
// // 2) *вычислить сумму первых N элементов последовательности 1 + 1/2 + 1/3 + ...+ 1/N . параметр N задает пользователь 

// const num = +prompt("Enter a number");
// let  result = 0;
//         for(let i = num; i > 0; --i){

//             result += 1/i;
//         }
//         console.log(result);


/******************************************************************* */
// // 3) Найти произведение целых чисел в пределах от lim1 до lim2 (например, если lim1=5 и lim2=12 то это произведение всех чисел от 5 до 12).


// const lim1 = +prompt("Введите меньшее число");
// const lim2 = +prompt("Введите большее число");
// let result = 1;
// for(let i = lim1; i <= lim2; i++){
//     result *= i
// }
// console.log(result);


/******************************************************************* */
// // Таски на функции
// // 0) Создать функцию isAdult, которая будет проверять возраст пользователя на совершеннолетие.
// // Ожидаемый вывод:
// // isAdult(20); // true
// // isAdult(4); // false


// function isAdult(age){
//     if(age >= 18){
//         console.log(true); 
//     }else{
//         console.log(false);
//     }
// }
// isAdult(20); 
// isAdult(4);  


/******************************************************************* */
// // 1) *Функция, которая запрашивает число и проверяет простое ли оно (простое число делиться без остатка на себя и на единицу)

// let num = +prompt("Введите число");
// function isPrime(num){
//     for(let i = 2; i < num; i++){
//         if(num % i == 0){
//            return false;
//         }
//      }
//     return true
// }
// console.log(num + "  is prime - " + isPrime(num));


/******************************************************************* */
// // 2) Создать функцию checkMultiplicity, которая принимает два числа и проверяет, делится ли первое на второе:

// // checkMultiplicity(25, 5) // true
// // checkMultiplicity(15, 3) // true
// // checkMultiplicity(15, 5) // true
// // checkMultiplicity(15, 4) // false

// function checkMultiplicity(num1, num2){
//         if(num1 % num2 == 0){
//            return true;
//         }
//     return false;
// }
// console.log(checkMultiplicity(25, 5));
// console.log(checkMultiplicity(15, 3));
// console.log(checkMultiplicity(15, 5));
// console.log(checkMultiplicity(15, 4));





/******************************************************************* */
// // 3) Проверка возможности треугольника. Создать функцию которая принимает длины треугольника; функция возвращает true если треугольник возможен и false если нет

// function isTriangle(a, b, c){
//     if(a + b > c && b + c > a && c + a > b){
//         return console.log(true);
//     }
//     return console.log(false);
// }
// isTriangle(1,2,3);
// isTriangle(4,4,4);

/******************************************************************* */
// // 4) Написать функции расчета площадей (поверхности) следующих фигур/тел: треугольника, прямоугольника (конуса, параллелепипеда)

// /**
//  * площадь треугольника
//  * @param {number} a -длина основания треугольника
//  * @param {number} h -высота треугольника
//  */
// function triangleArea(a, h){
//     return  1/2 * a * h;
// }

// /**
//  * площадь прямоугольника
//  * @param {number} a -длина прямоугольника
//  * @param {number} b -ширина прямоугольника
//  * @returns 
//  */
// function rectangleArea(a, b){
//     return a * b;
// }


// function parallelepipedArea(a, b, c){
//     return 2 * (a * b + b * c + a * c);
// }
// /**
//  * 
//  * @param {number} r -радиус основания конуса
//  * @param {number} l -образующая конуса
//  * @returns 
//  */
// function coneArea(r, l){
//     return 3.14 * r * (r + l);
// }
// console.log(triangleArea(7,4));
// console.log(rectangleArea(7,4));
// console.log(parallelepipedArea(2,3,4));
// console.log(coneArea(10,10));

// // (2 функции на выбор реализовать в формате функционального выражения)
// const triangleArea = function(a, h){
//     return  1/2 * a * h;
// }
// console.log(triangleArea(8,4));


// const rectangleArea = function(a, b){
//     return a * b;
// }
// console.log(rectangleArea(8,4));


/******************************************************************* */
// // Таски на объекты
// // 1. создать объект Student который содержит следующие свойства: имя, фамилию, пол, контактные данные, методы: вывод адреса, смена пола.

// const student = {
//     name: "Sergey",
//     surname: "Nosach",
//     isMale: true,
//     email: "111111@gmail.com",
//     showAddress: function(){
//         console.log(this.name + " " + this.surname + "\nemail: " + this.email);
//     },
//     genderReassignment: function(){
//         if(this.isMale == true){
//             this.isMale = false;
//         }else{
//             this.isMale = true;
//         }
//     },
// }

// student.showAddress();
// console.log(student.isMale);
// student.genderReassignment();
// console.log(student.isMale);
// student.genderReassignment();
// console.log(student.isMale);

/******************************************************************* */
// // 2. создать объект, который содержит свойства, о факультете и кафедре, методы: перевод на другой факультет. (можно на свой выбор)
//     const student = {
//         name: "Sergey",
//         surname: "Nosach",
//         faculty: "Faculty of Information Technology",
//         department: "Department of Engineering",
//         changeFaculty: function(){
//             if(this.faculty == "Faculty of Information Technology"){
//                 this.faculty = "Faculty of Computer Science and Cybernetics";
//             }else{
//                 this.faculty = "Faculty of Information Technology";
//             }
//         }
//     };
        
//         console.log(student.faculty);
//         student.changeFaculty();
//         console.log(student.faculty);
//         student.changeFaculty();
//         console.log(student.faculty);
        
/******************************************************************* */
// // 3 Создать функции-конструкторы:
// // - Книга (автор, название, год издания, издательство)
// // - Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер)

// function Book(author, name, publishingHouse, year){
//     this.author = author;
//     this.name = name;
//     this.publishingHouse = publishingHouse;
//     this.year = year;
// }

// const myBook = new Book("Ernest Hemingway", "The Old Man and the Sea", "Vintage Publishing",1999);
// console.log(myBook);


// function EBook(author, name, year, publishingHouse, format, ISBN ){
//     this.author = author;
//     this.name = name;
//     this.year = year;
//     this.publishingHouse = publishingHouse;
//     this.format = format;
//     this.ISBN = ISBN;
    
// }

// const myeBook = new EBook("Ernest Hemingway", "The Old Man and the Sea", 1999 , "Vintage Publishing", "pdf", "0684801221");
// console.log(myeBook);