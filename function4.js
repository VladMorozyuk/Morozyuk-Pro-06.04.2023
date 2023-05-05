// 1

function calculateAverage(arr) {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            sum += arr[i];
            count++;
        }
    }

    return sum / count;
}

const arr = [1, '2', 3, 'four', 5];
const average = calculateAverage(arr);
console.log(average);

// 2

function doMath(x, znak, y) {
    let result;
    switch (znak) {
        case "+":
            result = x + y;
            break;
        case "-":
            result = x - y;
            break;
        case "*":
            result = x * y;
            break;
        case "/":
            result = x / y;
            break;
        case "%":
            result = x % y;
            break;
        case "^":
            result = Math.pow(x, y);
            break;
        default:
            result = "Неправильний знак операції";
    }
    return result;
}

console.log(doMath(5, "+", 3));
console.log(doMath(10, "*", 2));
console.log(doMath(6, "/", 3));
console.log(doMath(7, "%", 2));
console.log(doMath(2, "^", 3));
console.log(doMath(5, "x", 3));

// 3

function create2DArray(rows, columns) {
    const array = [];

    for (let i = 0; i < rows; i++) {
        const row = [];

        for (let j = 0; j < columns; j++) {
            const value = prompt(`Введіть значення для масиву`);
            row.push(value);
        }

        array.push(row);
    }

    return array;
}

const array = create2DArray(3, 2);
console.log(array);

// 4

const str = ' hello world';
const chars = ['l', 'd'];

const result = removeChars(str, chars);
console.log(result);