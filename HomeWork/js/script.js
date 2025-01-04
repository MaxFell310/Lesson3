//  -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.

// const fruts = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomat" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];
// let result = fruts.map((item) => item.name);
// let newString = result.join(", ")
// console.log(newString);

//  -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.
// for (let i = 1; i < 10; i++){
//     if(i % 2 !== 0){
//         continue
//     }
//     console.log(i)
// }

//  -- 3 --
//Замініть цикл "for" на "while"
// let a = 0
// while(a < 5){
//     a++;
//     console.log(`цифра ${a}!`)
// }
// for (let i = 0; i < 5; i++) {
//     console.lpg( `цифра ${i}!` );
//   }

//  -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.
// let number;
// while (true) {
//   number = prompt("Введіть число більше за 100:");
//   if (number === null || number === "") {
//     alert("Ввід скасовано або порожній рядок.");
//     break;
//   }
//   number = Number(number);
//   if (number > 100) {
//     alert("Число прийнято!");
//     break;
//   } else {
//     alert("Число повинно бути більше за 100. Спробуйте ще раз.");
//   }
// }

//  -- 5 --
// Вирахуйте середній вік

// const girls = [
//   { age: 23, name: "Оля" },
//   { age: 29, name: "Аня" },
//   { age: 10, name: "Юля" },
//   { age: 20, name: "Катя" },
// ];
//   const avgAge = girls.reduce((sum, girls) => sum + girls.age,0)/girls.length
//   console.log(avgAge)