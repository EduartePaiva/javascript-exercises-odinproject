const fibonacci = function (num) {
    if (typeof num !== 'number') {
        num = parseInt(num)
    }
    if (num < 0) {
        return "OOPS"
    } else if (num == 0) {
        return 0
    }
    let first = 1
    let second = 1

    for (i = 2; i < num; i++) {
        const temp = first + second
        second = first
        first = temp
    }
    return first
};

// Do not edit below this line
module.exports = fibonacci;
