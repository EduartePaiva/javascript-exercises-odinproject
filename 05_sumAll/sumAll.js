const sumAll = function (numStart, numEnd) {
    if (
        typeof numStart != "number" ||
        typeof numEnd != "number" ||
        numEnd < 0 ||
        numStart < 0
    ) return "ERROR"
    if (numStart > numEnd) {
        const tmp = numStart;
        numStart = numEnd
        numEnd = tmp
    }

    let res = 0
    for (let i = numStart; i <= numEnd; i++) {
        res += i
    }
    return res
};

// Do not edit below this line
module.exports = sumAll;
