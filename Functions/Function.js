/*Problem 1*/
 function problem1() {
	   var num = document.getElementById("num1").value,
	       arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"],
		   res;
	
 if (num !== '' && !isNaN(num)) {
	var index = num[num.length-1];    
	res = arr[index];

   }
   else {
	   res="Enter a number";
   }
   document.getElementById("res1").innerHTML = "Result:" + res;
 }
 
/*Problem 2*/
 function problem2() {
	   var num = document.getElementById("num2").value,
	       res= "";
	
 if (num !== '' && !isNaN(num)) {
	for (var i= num.length-1; i>=0; i--) {
		res +=num[i];
	}
	
              
   }
   else {
	   res="Enter a number";
   }
   document.getElementById("res2").innerHTML = "Result:" + res;
 } 
 
 /*Problem 3*/
 function problem3CaseSensitive() {
   var word = document.getElementById("num3").value,
	   text = document.getElementById("p3").innerHTML,
       res;
   
   res = text.split(word).length - 1;
   
   document.getElementById("res3").innerHTML = "Result:" + res;
 }
 
 function problem3CaseInsensitive() {
   var word = document.getElementById("num3").value.toLowerCase(),
   text = document.getElementById("p3").innerHTML.toLowerCase(),
   res;
   
   res = text.split(word).length - 1;
   
    document.getElementById("res3").innerHTML = "Result:" + res;
 }
 
 
 /*Problem 4*/
 function problem4(){
	 
	 document.getElementById("res4").innerHTML = "Result:" + document.getElementsByTagName("div").length;
 } 
 
 /*Problem 5*/
 function problem5() {
	   var num = document.getElementById("num5").value,
	       array = [1, 12, 2, 2, 5, 5, 3],
	       counter=0;
		   
for (var i = 0; i<array.length; i++){
	if (array[i]==num) {
		counter++;
	}
}
	document.getElementById("res5").innerHTML = "Result:" + counter;
 } 


/*Problem 6*/
 function problem6() {
	   var index = document.getElementById("num6").value *1,
	       array = [20, 312, 44, 8, 30, 5, 108];
	       
        document.getElementById("res6").innerHTML = IsElementBigger(index, array);
 }

 
 function IsElementBigger(index, array)
 {
	  if (index > 0 && index < array.length-1) {
		   if (array[index] > array[index - 1] && array[index] > array[index + 1]) {
			   return true;
		   } else {
			  return false;
		   }
	   } else {
		   return false;
	   }
	   
 }
 
 
 /*Problem 7*/
 function problem7() {
	   var index = document.getElementById("num6").value *1,
	       array = [20, 312, 44, 8, 30, 5, 108],
	       res;
		   
		   
		   for (var i=0; i < array.length; i++) {
			   if (IsElementBigger(i, array)){
				   res = i;
				   break;
			   } 
		   }
		   
		   if(res == undefined)
		   {
			     document.getElementById("res7").innerHTML = "-1";
		   }
		   else{
			   document.getElementById("res7").innerHTML = res;
		   }       
 }
 
 
 