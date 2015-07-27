function p1() {
    var a = document.getElementById('numberA').value,
        b = document.getElementById('numberB').value,
        c = document.getElementById('numberC').value,
		result;

    if (!isNaN(a) && !isNaN(b) && !isNaN(c) && a !== '' && b !== '' && c !== '') {
        if (a > b) {
			if (a > c) {
				result = a;
			} else {
				result = c;
			}
		} else if (b > c) {
			result = b;
		} else {
			result = c;
		}
        document.getElementById('answer').innerHTML = "The biggest from three numbers is: " + result;
            
    } else {
        document.getElementById('answer').innerHTML =
            'Incorrect input. Enter two numbers.';
    }

    document.getElementById('numberA').value = '';
    document.getElementById('numberB').value = '';
	document.getElementById('numberC').value = '';

}
