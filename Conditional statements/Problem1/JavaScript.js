function p1() {
    var a = document.getElementById('numberA').value,
        b = document.getElementById('numberB').value,
        temp;
		
    if (!isNaN(a) && !isNaN(b) && a !== '' && b !== '') {
        if (a > b) {
            temp = a;
            a = b;
            b = temp;
        }
        document.getElementById('answer').innerHTML =
            a + ' ' + b;
    } else {
        document.getElementById('answer').innerHTML =
            'Incorrect input. Enter two numbers.';
    }

    document.getElementById('numberA').value = '';
    document.getElementById('numberB').value = '';
}
