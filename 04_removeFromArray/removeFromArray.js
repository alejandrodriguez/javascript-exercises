const removeFromArray = function(array,...indexNumbers) {
    for(i=0; i < indexNumbers.length; i++) {
        for(j=0; j < array.length; j++) {
            if (array[j] === indexNumbers[i]) {
                array.splice(j,1);
                break;
            }
        }

        
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
