const fibonacci = function(input) {
    const fib = [0, 1]
    
    for (let i = 2; i <= input; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }

    return fib[input]
};

// Do not edit below this line
module.exports = fibonacci;
