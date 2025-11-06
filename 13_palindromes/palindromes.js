const palindromes = function (str) {
    str = str.replace(/[^\w]/g, "").toUpperCase();
    let isPalindrome = true;
    for(let i = 0; i < Math.floor(str.length/2); i++) {
        if(str.at(i) !== str.at(str.length - i - 1)) {
            isPalindrome = false;
            break;
        }
    }
    return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
