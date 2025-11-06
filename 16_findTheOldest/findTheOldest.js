const findTheOldest = function(arr) {
    return arr.reduce((oldest, current) => {
        let oldestAge;
        if (!oldest.yearOfDeath) {
            oldestAge = new Date().getFullYear() - oldest.yearOfBirth;
        } else {
            oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        }
        let currentAge;
        if (!current.yearOfDeath) {
            currentAge = new Date().getFullYear() - current.yearOfBirth;
        } else {
            currentAge = current.yearOfDeath - current.yearOfBirth;
        }

        if (oldestAge < currentAge) {
            return current;
        } else {
            return oldest;
        }
    });
};

// Do not edit below this line
module.exports = findTheOldest;
