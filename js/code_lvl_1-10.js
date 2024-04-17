// 1. Заповнити масив випадковими числами від 1 до 100
let arr = [];
let min = 1;
let max = 100;
let arrLenght = 15;

for (let i = 0; i < arrLenght; i++) {
  arr[i] = Math.round(Math.random() * (max - min) + min);
}

console.log(arr); // [12, 23, 32, 90, 83, 58, 88, 31, 4, 54, 76, 90, 49, 65, 49]

// 2. Дано число 12345. Вивести в консоль всі його символи починаючи з кінця
let num = 12345;
let numToStr = String(num);

for (let i = 0; i < numToStr.length; i++) {
  console.log(numToStr[numToStr.length - 1 - i]);
}
// 5
// 4
// 3
// 2
// 1

// 3. Дано масив [1, 2, 3, 4, 5, 6]. По черзі вивести підмасиви з 2 елементів
let arr2 = [1, 2, 3, 4, 5, 6];
let subArr1 = arr2.slice(0, 2);
let subArr2 = arr2.slice(2, 4);
let subArr3 = arr2.slice(4);

console.log(subArr1); // [1, 2]
console.log(subArr2); // [3, 4]
console.log(subArr3); // [5, 6]

// 4. Дано 2 масиви [1, 2, 3] та [4, 5, 6]. Створити новий на основі цих двох
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let newArray = array1.concat(array2);

console.log(newArray); // [1, 2, 3, 4, 5, 6]
