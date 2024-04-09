// 1. З рядка "abcde" отримати масив з літерами
const str = "abcde";

const arr = str.split("");

console.log(arr); // ['a', 'b', 'c', 'd', 'e']

// 2. З числа "12345" отримати масив з цифрами
const number = 12345;
const numToStr = String(number);

let arr2 = numToStr.split("");

for (let i = 0; i < arr2.length; i++) {
    arr2[i] = Number(arr2[i]);
}

console.log(arr2); // [1, 2, 3, 4, 5]
console.log(typeof(arr2[0])); // number

// 3. Число "12345" перевернути на "54321"

arr2 = arr2.reverse();
const arrToStr = arr2.join("");
const strToNum = Number(arrToStr);

console.log(strToNum, typeof(strToNum)); // 54321 'number'

// 4. Знайти суиу цифр числа "12345"
let sum = 0;

for (let item of arr2) {
    sum += item;
}

console.log(sum); // 15