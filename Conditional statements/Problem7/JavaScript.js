function p1() {
    var a = document.getElementById('numberA').value,
        b = document.getElementById('numberB').value,
        c = document.getElementById('numberC').value,
		d = document.getElementById('numberC').value,
		e = document.getElementById('numberC').value,
		result;

    if (!isNaN(a) && !isNaN(b) && !isNaN(c) && !isNaN(d) && !isNaN(e) && a !== '' && b !== '' && c !== ''&& d !== '' && e !== '') {
       if (a > b) {
       result = a;
       if (c > a) {
           result = c;
           if (d > c) {
               result = c;
               if (e > d) {
                   result = e;
               }
           }
          } else {
              if (d > a) {
                  result = d;
                  if (e > d) {
                      result = e;
                  }
              } else if (e > a) {
                  result = e;
              }
         
          }
       } else {
           result = b;
           if (c > b) {
               result = c;
               if (d > c) {
                   result = c;
                   if (e > d) {
                       result = e;
                   }
               }
           } else {
               if (d > b) {
                   result = d;
                   if (e > d) {
                       result = e;
                   }
               } else if (e >b) {
                   result = e;
               }
       
           }
       }
        document.getElementById('answer').innerHTML = "The biggest from three numbers is: " + result;
            
    } else {
        document.getElementById('answer').innerHTML =
            'Incorrect input. Enter 5 numbers.';
    }

    document.getElementById('numberA').value = '';
    document.getElementById('numberB').value = '';
	document.getElementById('numberC').value = '';
	document.getElementById('numberD').value = '';
	document.getElementById('numberE').value = '';

}
