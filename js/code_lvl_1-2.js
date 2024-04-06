// 1. Вивести в консоль першу цифру числа
const number = 8541631;
const numToStr = String(number);
const firstNumeral = Number(numToStr[0]);

console.log(firstNumeral, typeof(firstNumeral)); // 8 'number'

// 2. Вивести в консоль останню цифру числа
const lastNumeral = Number(numToStr[numToStr.length - 1]);
console.log(lastNumeral, typeof(lastNumeral)); // 1 'number'

// 3. Вивести в консоль суму першої та останньої цифер
const sum = firstNumeral + lastNumeral;
console.log(sum); // 9

// 4. Вивести в консоль кількість цифр числа
const quantityNumeral = numToStr.length;
console.log(quantityNumeral); // 7

// 5. Перевірити чи співпадають перші цифри двох чисел
const firstNumber = 184856;
const secondNumber = 546;

const firstNumToStr = String(firstNumber);
const secondNumToStr = String(secondNumber);

if (firstNumToStr[0] === secondNumToStr[0]) {
  console.log(`Перші цифри чисел ${firstNumber} та ${secondNumber} співпадають`);
} else {
  console.log(`Перші цифри чисел ${firstNumber} та ${secondNumber} не співпадають`);
}