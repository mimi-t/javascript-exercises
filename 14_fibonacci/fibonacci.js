const fibonacci = function(num) {
    num = Number(num);
    if (num < 0) {
        return "OOPS";
    } else if (num === 0) {
        return 0;
    }

    let val = 1;
    let firstPrev = 1;
    let secondPrev = 1;
    for (let i = 3; i <= num; i++) {
        val = firstPrev + secondPrev;
        firstPrev = secondPrev;
        secondPrev = val;
    }
    return val;
};
// returns the 4th member of the series: 3  (1, 1, 2, 3, 5, 8)
// Do not edit below this line
module.exports = fibonacci;
