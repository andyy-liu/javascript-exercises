const removeFromArray = function(arr, ...args) {
    // for each argument in the argument remove
    args.forEach((arg) => {
        const i = arr.indexOf(arg);
        arr.splice(i, 1)
        if (arr.indexOf(arg) === -1) {

        }
    })
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
