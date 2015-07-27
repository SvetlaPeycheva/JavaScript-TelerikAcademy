function p1() {
    var number = document.getElementById('numberA').value,
		result;

    if (!isNaN(number) && number !== '') {
       var ones = [' zero', ' one', ' two', ' three', ' four', ' five', ' six', ' seven',
				' eight', ' nine', ' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', 
				' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'],
		tens = [' ', ' ', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'],
		result = '';
		
	
		if(number < 20){
			result = ones[number];
		} else if((number % 10) === 0 && number > 19 && number < 100){
			result = tens[number/10];
		} else if((number % 10) !== 0 && number > 19 && number < 100){
			result = tens[Math.floor(number/10 % 10)] + ones[Math.floor(number/1 % 10)];
		} else if((number % 100) === 0 && number > 99 && number < 1000){
			result = ones[number/100] + ' hundred ';		
		} else if((number % 10) !== 0 && number > 100 && number < 1000){
			result = ones[Math.floor(number/100)] + ' hundred and' +
					tens[Math.floor(number/10 % 10)] + ones[Math.floor(number/1 % 10)];
		}
			
		
        document.getElementById('answer').innerHTML = "Result: " + result;
            
    } else {
        document.getElementById('answer').innerHTML =
            'Incorrect input. Enter two numbers.';
    }

    document.getElementById('numberA').value = '';

}
