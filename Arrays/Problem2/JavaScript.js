var firstArray = 'qwertghtuk',
	secondArray = 'azsxdcgyrj',
	maxIndex = Math.max(firstArray.length,secondArray.length),
	i;

for (i = 0; i < maxIndex; i+=1) {
	if (firstArray[i] > secondArray[i]) {
		console.log('firstArray[' + i + '] > secondArray[' + i + ']');}
	if (firstArray[i] < secondArray[i]) {
		console.log('firstArray[' + i + '] < secondArray[' + i + ']');}
	if (firstArray[i] === secondArray[i]) {
		console.log('firstArray[' + i + '] = secondArray[' + i + ']');}
	}