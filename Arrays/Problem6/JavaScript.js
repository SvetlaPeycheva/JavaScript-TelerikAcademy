var arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5],
    Seq = 0,
    maxSeq = 0,
    arrValue = 0,
    arrLength,
    i,
    j;

for (i = 0, arrLength = arr.length; i < arrLength - 1; i+=1) {

    for (j = 0; j <= arrLength - 1; j+=1) {

        if (arr[i] === arr[j]) {
            Seq += 1;

            if (Seq > maxSeq) {
                maxSeq = Seq;
                arrValue = arr[i];
            }
        }
    }
    Seq = 0;
}

console.log(arrValue + '(' + maxSeq + ' times)');