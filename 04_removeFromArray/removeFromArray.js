
/**
 * 
 * @param {any[]} array 
 */
const removeFromArray = function (array, ...params) {
    return array.filter(arrayValue => !params.includes(arrayValue))
};

// Do not edit below this line
module.exports = removeFromArray;
