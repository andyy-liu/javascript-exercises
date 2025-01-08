const repeatString = function(string, num) {
    let inputString = ""
    if (num < 0) {
        return "ERROR"
    }
    else {
        while (num) {
            inputString += string
            num--
        }
    }
    return inputString
};

// Do not edit below this line
module.exports = repeatString;
