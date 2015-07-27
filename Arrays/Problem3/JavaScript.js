var input = [1, 2, 1, 1, 3, 3, 3, 2, 2, 1, 1],
    result = new Array,
    max = Number.MIN_VALUE,
    number = 1,
    myElem,
    i,
    k;

for (i = 0; i < input.length; i += 1) {
    if (input[i] === input[i + 1]) {
        number += 1;
    } else {
        number = 1;
    }
    if (number > max) {
        max = number;
        for (k = 0; k < max; k += 1) {
            result[k] = input[i];
        }
    }
}
console.log(result.join(', '));