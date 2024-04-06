// 1. Перевірити від'ємне число чи ні
const number = 623;
if (number < 0) {
  console.log(`${number} - від'ємне число`);
} else {
  console.log(`${number} - додатнє число`);
}

// 2. Вивести в консоль довжину рядка
const str = "Вивести в консоль довжину рядка";
console.log(str.length);

// 3. Вивести в консоль останній символ рядка
console.log(str[str.length - 1]);

// 4. Перевірити парне число чи непарне
if (number % 2 === 0) {
  console.log(`${number} - це парне число`);
} else {
  console.log(`${number} - це непарне число`);
}

// 5. Перевірити чи співпадають перші літери двох слів
const word1 = "hello";
const word2 = "Helen";
const letterWord1 = word1[0].toLowerCase();
const letterWord2 = word2[0].toLowerCase();

if (letterWord1 === letterWord2) {
  console.log(`Перші літери слів "${word1}" та "${word2}" співпадають`);
} else {
  console.log(`Перші літери слів "${word1}" та "${word2}" не співпадають`);
}

// 6. Отримати останню літеру слова. Якщо в кінці стоїть "ь", то вивести передостанню
const word = "корабель";

if (word[word.length - 1].toLowerCase() !== "ь") {
  console.log(word[word.length - 1]);
} else {
  console.log(word[word.length - 2]);
}
