// Дано масив з рядками. Залишити в цьому масиві тільки ті рядки, які починаються на http://
arr = ["http://happymonday.ua", 
        "https://www.youtube.com/watch?v=RUvHHuZjXu8", 
        "http://translate.google.com", 
        "https://applyya.com/uk/what-next/", 
        "facebook.com", 
        "youtube.http://"];

const regExp = /^http:\/\//gim;
let i = 0;
while (i < arr.length) {
    if (!regExp.test(arr[i])) {
        arr.splice(i, 1);
    } else {
        i++;
    }
}

console.log(arr); // ['http://happymonday.ua', 'http://translate.google.com']

// Дано масив з рядками. Залишити в цьому масиві тільки ті рядки, які закінчуються на .html
arr2 = ["co.htmlde_lvl_1-2.js", "document.html", ".html-file", "new-music.mp3", "image.png", "index.html"];

const regExp2 = /\.html$/gim;
let j = 0;
while (j < arr2.length) {
    if (!regExp2.test(arr2[j])) {
        arr2.splice(j, 1);
    } else {
        j++;
    }
    
}

console.log(arr2); // ['document.html', 'index.html']

// Дано масив з числами. Збільшити кожне число на 10 відсотків
arrNum = [4, -8, 56, 213, 4465564, 7, -698, 78, 0, -4521];

for (let k = 0; k < arrNum.length; k++) {
    if (arrNum[k] < 0) {
        arrNum[k] = -arrNum[k];
        arrNum[k] -= (arrNum[k] / 100 * 10);
        arrNum[k] = -arrNum[k];
    } else {
    arrNum[k] += (arrNum[k] / 100 * 10);
    }
}

console.log(arrNum); // [4.4, -7.2, 61.6, 234.3, 4912120.4, 7.7, -628.2, 85.8, 0, -4068.9]