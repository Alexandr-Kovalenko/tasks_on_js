// 1. Знайти суму квадратів елементів масиву
let arr = [5, 78, 3, -6, 23, 8, -4, -63, 5, 67, 9, -10, -3];

let sumSq = 0;

for (let i = 0; i < arr.length; i++) {
    let pow = Math.pow(arr[i], 2);
    sumSq += pow;
}

console.log(sumSq); // 15436

// 2. Знайти суму квадратних коренів елементів масиву
let sumSqrt = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
    let sqrt = Math.sqrt(arr[i]);
    sumSqrt += sqrt;
    }
};

console.log(sumSqrt); // 33.84555904882767

// 3. Знайти суму додатніх елементів масиву
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
    sum += arr[i];
    }
};

console.log(sum); // 198

// 4. Знайти суму тих елементів масиву, які більші 0 і менші 10
let sumDiapason = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] < 10) {
    sumDiapason += arr[i];
    }
};

console.log(sumDiapason); // 30