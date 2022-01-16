const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'ERROR';
    }
    let lesserNumber;
    let greaterNumber;
    let sum =  0;
    if (num1 < num2) {
        lesserNumber = num1;
        greaterNumber = num2;
    } else {
        lesserNumber = num2;
        greaterNumber = num1;
    };
    for (i = lesserNumber; i <= greaterNumber; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
