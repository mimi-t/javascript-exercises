const removeFromArray = function(arr, ...removeTargets) {
    return arr.filter(val => !removeTargets.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
