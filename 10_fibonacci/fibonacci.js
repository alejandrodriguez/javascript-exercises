const fibonacci = function(num) {
    num = parseInt(num, 10);
    let superPreviousInt = 1;
    let previousInt = 1;
    let solution = 0;
    if (num <= 0) {
        return 'OOPS';
    } else if (num === 1) {
        return superPreviousInt;
    } else if (num === 2) {
        return previousInt;
    } else {
        for (let i = 3; i <= num; i++) {
            solution = superPreviousInt + previousInt;
            superPreviousInt = previousInt;
            previousInt = solution;
        }
        return solution;
    }
};

// Do not edit below this line
module.exports = fibonacci;
