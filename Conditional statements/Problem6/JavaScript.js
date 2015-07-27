function p1() {
    var a = document.getElementById('numberA').value *1,
        b = document.getElementById('numberB').value *1,
        c = document.getElementById('numberC').value *1,
		x1,x2;

    if (!isNaN(a) && !isNaN(b) && !isNaN(c) && a !== '' && b !== '' && c !== '') {
         var formula = Math.pow(b, 2) - 4 * a * c;
         if (formula < 0) {
             return 'no real roots';
         }
         
         x1 = ((-b - Math.sqrt(formula)) / (2*a));
         x2 = ((-b + Math.sqrt(formula)) / (2*a));
		
         
        document.getElementById('answer').innerHTML = "X1 =  " + x1 +" " + "X2 = " +x2;
            
    } else {
        document.getElementById('answer').innerHTML =
            'Incorrect input. Enter two numbers.';
    }

    document.getElementById('numberA').value = '';
    document.getElementById('numberB').value = '';
	document.getElementById('numberC').value = '';

}
