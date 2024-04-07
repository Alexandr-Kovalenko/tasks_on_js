// 1. Знайти суму всих цілих чисел від 1 до 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum); // 5050

// 2. Знайти суму всих парних чисел від 1 до 100
let sum2 = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sum2 += i;
    }
}
console.log(sum2); // 2550

// 3. Знайти суму всих непарних чисел від 1 до 100
let sum1 = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        sum1 += i;
    }
}
console.log(sum1); // 2500

// 4. Дано 2 числа. Знайти залишок від ділення цих чисел
const number1 = 456982;
const number2 = 235;
const remainder = number1 % number2;

console.log(remainder); // 142

// 5. Перебрати і вивести в консоль всі символи рядка, починаючи з кінця
const str = "Всі символи цього рядка я виведу почерзі, починаючи з кінця";

for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
}