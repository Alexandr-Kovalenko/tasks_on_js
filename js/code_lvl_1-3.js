// 1. Якщо в рядку більше одного символа, то вивести в консоль передостанній символ
const str = "This is string";

if (str.length > 1) {
    console.log(str[str.length - 2]); // n
}

// 2. Є 2 цілих числа. Перевірити чи ділиться перше число на друге без залишку
const firstNum = 15354;
const secondNum = 38155354450;

if (secondNum % firstNum === 0) {
    console.log(`Число ${firstNum} ділитсья на ${secondNum} без залишку`);
} else {
    console.log(`Число ${firstNum} ділитсья на ${secondNum} з залишком ${secondNum % firstNum}`);
}