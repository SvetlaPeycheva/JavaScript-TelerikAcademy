function p1() {
	var result = "";
	var elements = [document, window, navigator];
	
	for(var i = 0; i < elements.length; i++){
		var element = elements[i];
	    var props = Object.getOwnPropertyNames(element);
        props.sort();
        
        result += element.toString() + "</br>";
		if(props.length == 0){
		   result += "Element has no properties</br>";
		}
		else {
          result += "Lexicographically smallest : " + props[0] + "</br>";
          result +=  "Lexicographically largest : " + props[props.length - 1] + "</br>";     
		}
	}
	
    document.getElementById('answer').innerHTML = result;
            


}
