var array = [1, 5, 8, 22, 27, 35, 3, 44, 33, 59, 11];

for (var i = 0; i < array.length - 1; i++) {
    var min = i;
    for (var p = i + 1; p < array.length; p++) {
        if (array[p] < array[min]) {
            min = p;
        }
    }
    var temp = array[i];
    array[i] = array[min];
    array[min] = temp;
}
for (var i = 0; i < array.length; i++) {
    console.log(array[i] + ' ');
}