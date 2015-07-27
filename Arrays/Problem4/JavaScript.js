var arr =[1, 5, 3, 3, 5, 2, 4],
    result = new Array,
    max = Number.MIN_VALUE,
    numb = 1,
	index = 0,
    i,
    q;

for (i = 0; i < arr.length; i += 1) {
    if (arr[i] < arr[i + 1]) {
        numb += 1;
    } else {
        numb = 1;
        index = i + 1;
    }
    if (numb > max) {
        max = numb;
        q = index;
        for (k = 0; k < max; k += 1, q += 1) {
            result[k] = arr[q];
        }
    }
}
console.log(result.join(', '));