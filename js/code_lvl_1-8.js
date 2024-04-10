// 1. Заповнити масив цілими числами від 1 до 10
const arr1 = [];
let number = 1;

for (let i = 0; i < 10; i++) {
    arr1[i] = number;
    number++;
}

console.log(arr1); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 2. Заповнити масив парними числами від 1 до 10
const arr2 = [];
let index = 0;

for (let i = 1; i <= 10; i++) {
    if(i % 2 === 0) {
        arr2[index] = i;
        index++;
    }
}

console.log(arr2); // [2, 4, 6, 8, 10]

// 3. Є масив [1.456, 2.125, 3.32, 4.1, 5.34]. Округлити дробні числа до одного знака після коми
let arr3 = [1.456, 2.125, 3.32, 4.1, 5.34];

for (let i = 0; i < arr3.length; i++) {
    arr3[i] = arr3[i].toFixed(1);
    arr3[i] = Number(arr3[i]);
}

console.log(arr3); // [1.5, 2.1, 3.3, 4.1, 5.3]