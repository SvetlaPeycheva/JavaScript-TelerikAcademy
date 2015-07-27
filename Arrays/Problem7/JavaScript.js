var array = [3, 1, 4, 2, 9, 18, 7];
var key = 2,
    index1 = 0,
    index2 = array.length - 1;

array.sort(function (x, y) {
    return x - y;
});

while (index2 >= index1) {
    var mid = parseInt((index1 + index2) / 2);
    if (array[mid] < key) {
        index1 = mid + 1;
    } else if (array[mid] > key) {
        index2 = mid - 1;
    } else {
        console.log(mid);
        break;
    }
}