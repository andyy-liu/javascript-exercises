const palindromes = function (inputStr) {
    // let stripped = str.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, "").toLowerCase()
    // let reverse = stripped.split("").reverse().join("")
    // if (reverse === stripped) {
    //     return true
    // } else {
    //     return false
    // }
    let alphanumeric = "abcdefghijklmnopqrstuvwxyz0123456789"

    let cleanedString = inputStr.toLowerCase()
                                .split('')
                                .filter((character) => alphanumeric.includes(character))
                                .join('')
    
    let reversedString = cleanedString.split('').reverse().join('')

    return reversedString === cleanedString
};

// Do not edit below this line
module.exports = palindromes;
