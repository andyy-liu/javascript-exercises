const removeFromArray = function(arr, ...remove) {
    // for each argument in the argument remove
    remove.forEach((arg) => { 
        const i = arr.indexOf(arg);
        arr.splice(i, 1)
    })
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
