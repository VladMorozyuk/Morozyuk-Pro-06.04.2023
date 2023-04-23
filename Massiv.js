
let length = prompt("Введіть довжину масиву:");

let arr = [];

for (let i = 0; i < length; i++) {
    arr.push(prompt(`Введіть елемент масиву ${i}:`));
}

arr.sort();

arr.splice(1, 3);

document.write(`Масив після видалення елементів з 2 по 4 ${arr}`);