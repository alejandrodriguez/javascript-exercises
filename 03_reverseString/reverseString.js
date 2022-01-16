const reverseString = function(str) {
    let splitString = str.split('');
    let reverse = '';
    let i = splitString.length;
    while (i > 0) {
        reverse += splitString.pop();
        i--;
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
