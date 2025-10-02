function lowerCaseWords(inputArray) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(inputArray)) {
            reject("Input must be an array.");
        }
        const result = inputArray
            .filter(item => typeof item === 'string')
            .map(item => item.toLowerCase());

    resolve(result);
    });
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.error(error));