const repeatString = function(stringToBeRepeated, numberOfRepetitions) {
    if (numberOfRepetitions < 0) return 'ERROR';
    let repeatedString = '';
    for (let i = 0; i < numberOfRepetitions; i++) {
        repeatedString += stringToBeRepeated; 
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
