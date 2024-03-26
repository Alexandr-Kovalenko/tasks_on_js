function isEmpty(value) {
  if (value === "") {
    alert("Ви не ввели жодного значення");
    getHeight();
    return true;
  } else {
    return false;
  }
}

function isNum(value, emptyValue) {
  value = parseFloat(value);
  if (!emptyValue) {
    if (Number.isFinite(value)) {
      return true;
    } else {
      alert("Ви ввели не число");
      getHeight();
      return false;
    }
  }
}

function isCorrectHeight(value, numValue) {
  if (numValue) {
    if (value > 30 && value < 250) {
      return true;
    } else {
      if (value <= 30) {
        alert(
          "Ви серйозно? Навіть новонароджені мають більший зріст.\nВведіть, будь ласка, коректне число"
        );
        getHeight();
      } else {
        alert(
          "ОГО! Ви, напевно, зірка NBA?\nНіразу не чув про людей з таким зростом.\nВведіть, будь ласка, коректне число"
        );
        getHeight();
      }
      return false;
    }
  }
}

function isCorrectWeight(value, numValue) {
  if (numValue) {
    if (value > 20 && value < 250) {
      return true;
    } else {
      if (value <= 20) {
        alert("Щось у Вас дуже маленька вага.\nВи правильно ввели свої дані?");
        getWeight();
      } else {
        alert(
          "Надмірна вага!\nА чи не намагаєтеся Ви вирахувати індекс масси тіла корови, наприклад?\nВведіть, будь ласка, коректне число"
        );
        getWeight();
      }
      return false;
    }
  }
}

function getHeight() {
  height = prompt("Введіть свій зріст в сантиметрах");
  emptyHeight = isEmpty(height);
  numHeight = isNum(height, emptyHeight);
  correctHeight = isCorrectHeight(height, numHeight);

  //   console.log(emptyHeight, numHeight, correctHeight);
}

function getWeight() {
  weight = prompt("Введіть свою вагу в кілограмах");
  emptyWeight = isEmpty(weight);
  numWeight = isNum(weight, emptyWeight);
  correctWeight = isCorrectWeight(weight, numWeight);

  //   console.log(emptyHeight, numHeight, correctHeight);
}

let height;
let emptyHeight;
let numHeight;
let correctHeight;
let weight;
let emptyWeight;
let numWeight;
let correctWeight;
let bodyMassIndex;

alert("Вітаю! Якщо бажаєте вирахувати індекс маси свого тіла натисніть ОК");
getHeight();
getWeight();
bodyMassIndex = weight / (height / 100) ** 2;
console.log(bodyMassIndex.toFixed());
alert(
  `При зрості ${height} сантиметрів та вазі ${weight} кілограмів індекс маси Вашого тіла складає - ${bodyMassIndex.toFixed()}`
);
