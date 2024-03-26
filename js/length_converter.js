function kmToMiles(dist) {
  let res = dist * 0.6213711922;
  alert(`В ${dist} км ${res.toFixed(3)} миль`);
}

function milesToKm(dist) {
  let res = dist * 1.609344;
  alert(`В ${dist} миль ${res.toFixed(3)} км`);
}

function isEmpty(dist) {
  if (dist === "") {
    emptyValue = true;
    alert(
      'Ви не ввели жодного значення.\nНатисніть "ОК", та перезавантажте сторінку'
    );
  } else {
    emptyValue = false;
  }
}

function isNum(dist) {
  dist = parseFloat(dist);
  if (!emptyValue) {
    if (Number.isFinite(dist)) {
      num = true;
      distance = distance.toLowerCase();
    } else {
      num = false;
      alert(
        'Ви ввели некоректне значення.\nНатисніть "ОК", та перезавантажте сторінку'
      );
    }
  }
}

function isCorrect(dist) {
  if (num) {
    if (dist[dist.length - 1] === "k" || dist[dist.length - 1] === "m") {
      correctValue = true;
    } else {
      correctValue = false;
      alert(
        'Ви не поставили в кінці "m" або "k".\nНатисніть "ОК", та перезавантажте сторінку'
      );
    }
  }
}

let distance = prompt(
  'Для конвертації введіть довжину в кілометрах, або в милях. Якщо це будуть кілометри,\
  то в кінці числа поставте англійську літеру "k", а якщо милі - "m"'
);
let result = 0;
let emptyValue = false;
let num = false;
let correctValue = false;

isEmpty(distance);
isNum(distance);
isCorrect(distance);

if (distance[distance.length - 1] === "k" && correctValue) {
  distance = parseFloat(distance);
  kmToMiles(distance);
}

if (distance[distance.length - 1] === "m" && correctValue) {
  distance = parseFloat(distance);
  milesToKm(distance);
}
