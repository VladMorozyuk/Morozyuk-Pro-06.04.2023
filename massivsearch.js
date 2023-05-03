const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

// 1

let sum = 0;
let positiveCount = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        sum += arr[i];
        positiveCount++;
    }
}

console.log(`Сума позитивних елементів: ${sum}`);
console.log(`Кількість позитивних елементів: ${positiveCount}`);

// 2

const min = Math.min(...arr);
const minIndex = arr.indexOf(min);

console.log(`Мінімальний елемент: ${min}`);
console.log(`Порядковий номер мінімального елементу: ${minIndex}`);

// 3

const max = Math.max(...arr);
const maxIndex = arr.indexOf(max);

console.log(`Максимальний елемент: ${max}`);
console.log(`Порядковий номер максимального елементу: ${maxIndex}`);


// 4

let negativeCount = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        negativeCount++;
    }
}

console.log(`Кількість негативних елементів: ${negativeCount}`);

// 5

let ar = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let positiveProduct = 1;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        positiveProduct *= arr[i];
    }
}

console.log("Добуток позитивних елементів: " + positiveProduct);