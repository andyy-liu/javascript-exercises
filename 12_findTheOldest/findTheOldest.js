const findTheOldest = function(people) {
    let oldest = people.sort((a, b) => {
        let lastPersonAge = a.yearOfDeath - a.yearOfBirth
        let nextPersonAge = b.yearOfDeath - b.yearOfBirth
        return lastPersonAge < nextPersonAge ? 1 : -1
    })
    return oldest[0]
};

// Do not edit below this line
module.exports = findTheOldest;
