function p1() {
    var a = document.getElementById('numberA').value,
        b = document.getElementById('numberB').value,
        c = document.getElementById('numberC').value,
		result;

    if (!isNaN(a) && !isNaN(b) && !isNaN(c) && a !== '' && b !== '' && c !== '') {
        if (a > b) {
			if (a > c) {
				if (b > c) {
					result = a + " " + b + " " + c;
				} else {
					result = a + " " + c + " " + b;
				}
			} else {
				result = c + " " + a + " " + b;
			}
		} else if (b > c) {
			if (a > c) {
				result = b + " " + a + " " + c;
			} else {
				result = b + " " + c + " " + a;
			}
		} else {
			result = c + " " + b + " " + a;
		}
        document.getElementById('answer').innerHTML = "Result is: " + result;
            
    } else {
        document.getElementById('answer').innerHTML =
            'Incorrect input. Enter two numbers.';
    }

    document.getElementById('numberA').value = '';
    document.getElementById('numberB').value = '';
	document.getElementById('numberC').value = '';

}
