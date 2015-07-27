function p1() {
	var i = 1,
		n = document.getElementById('numberA').value,
		result;

    if (!isNaN(n) && n !== '') {
		result = "</br>";
      for (i = 1; i <= n; i++) {
		  if (i % 3 != 0 && i % 7 != 0) {
			   result += i + "</br>";
		  }
	  }
		
       document.getElementById('answer').innerHTML = "Result: " + result;
            
    } else {
        document.getElementById('answer').innerHTML =
            'This is not a number.';
    }

    document.getElementById('numberA').value = '';

}
