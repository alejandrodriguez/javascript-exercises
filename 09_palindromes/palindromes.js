const palindromes = function (string) {
    let splitUp = string.toLowerCase().split('');
    let onlyLetters = splitUp.filter(character => character.match(/[a-z]/))
    console.log(onlyLetters);
    if (onlyLetters.join() === onlyLetters.reverse().join()) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
