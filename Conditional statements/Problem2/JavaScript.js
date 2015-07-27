function p1() {
    var a = document.getElementById('numberA').value,
        b = document.getElementById('numberB').value,
        c = document.getElementById('numberC').value,
		result;

    if (!isNaN(a) && !isNaN(b) && !isNaN(c) && a !== '' && b !== '' && c !== '') {
        if ((a > 0 && b > 0 && c > 0) || (a < 0 && b < 0 && c > 0) || (a < 0 && b > 0 && c < 0) || (a > 0 && b < 0 && c < 0)) {
           result = "+";
        } else if(a == 0 || b == 0 || c == 0) {
			result = "0";
		} else {
			result = "-";
		}
			
        document.getElementById('answer').innerHTML = result;
            
    } else {
        document.getElementById('answer').innerHTML =
            'Incorrect input. Enter two numbers.';
    }

    document.getElementById('numberA').value = '';
    document.getElementById('numberB').value = '';
}
