const repeatString = function(string, num) {
    let loopedString = '';
    if (num < 0) {
        return 'ERROR';
    }
    for(i=1; i <= num; i++) {
        loopedString += string;
    }
    return loopedString;
};

// Do not edit below this line
module.exports = repeatString;
