const repeatString = function (word, numTimes) {
    if (numTimes < 0) return "ERROR"
    string = ''
    for (let i = 0; i < numTimes; i++) {
        string += word
    }

    return string
};

// Do not edit below this line
module.exports = repeatString;
