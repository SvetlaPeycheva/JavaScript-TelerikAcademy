function p1() {
	var numbers = [7,2,3,4,45,6,1,8,9,10],
		min,
		max;

		min = numbers[0];
		max = numbers[0];
		
      for (var i = 0; i < numbers.length; i++) {
		  if (min > numbers[i]){
			  min = numbers[i];
		  }
		  if (max < numbers[i]){
			  max = numbers[i];
		  }
	  }
		
     document.getElementById('answer').innerHTML = "Min =  " + min + "</br>" + "Max = " + max;
            


}
