const add = function (num1, num2) {
    return num1 + num2
};

const subtract = function (num1, num2) {
    return num1 - num2
};

const sum = function (array) {
    return array.reduce((prev, cur) => cur + prev, 0)
};

const multiply = function (numbers) {
    return numbers.reduce((prev, cur) => prev * cur, 1)
};

const power = function (num1, num2) {
    return Math.pow(num1, num2)
};

const factorial = function (num) {
    res = 1
    for (let i = 2; i <= num; i++) {
        res *= i
    }
    return res
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
};
