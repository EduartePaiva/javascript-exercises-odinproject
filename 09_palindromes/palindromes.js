/**
 * 
 * @param {string} string 
 * @returns bool
 */
const palindromes = function (string) {
    const newString = string.toLowerCase().split("").filter(char => {
        const charVal = char.charCodeAt(0)
        // I'm filtering lower case letters and numbers using ascii
        return (charVal >= 97 && charVal <= 122) || (charVal >= 48 && charVal <= 57)
    })
    left = 0
    right = newString.length - 1
    while (left < right) {
        if (newString[left] !== newString[right]) return false
        left++
        right--
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
