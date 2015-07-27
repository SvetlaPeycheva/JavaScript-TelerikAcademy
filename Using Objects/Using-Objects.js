/*Problem 1*/
 function problem1(){
	 var point1 = { 
		x: document.getElementById('p1x').value *1,
		y: document.getElementById('p1y').value *1
	 },
     point2 = { 
		x: document.getElementById('p2x').value *1,
		y: document.getElementById('p2y').value *1
	 },
     point3 = { 
		x: document.getElementById('p3x').value *1,
		y: document.getElementById('p3y').value *1
	 },
	 
    lines = [calc(point1, point2),
                calc(point2, point3),
                calc(point1, point3)]
	
	lines.sort();
	
	document.getElementById('res1Distance').innerHTML = "Distance:  " + calc(point1, point2);
	document.getElementById('res1Triangle').innerHTML = "Can form a triangle:  " + ((lines[0]*1 + lines[1]*1) > lines[2]*1);
   

 }
 function calc(point1, point2) {
    var distance = Math.sqrt(
        Math.abs(point2.x - point1.x) * Math.abs(point2.x - point1.x) +
        Math.abs(point2.y - point1.y) * Math.abs(point2.y - point1.y));
    return distance.toFixed(2);
}

/*Problem 2*/
Array.prototype.remove = function () {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === arguments[0]) {
            this.splice(i, 1);
            i--;
        }
    }
}
 function problem2(){
	 var number = document.getElementById('num2').value *1;
	 var array = [1, 12, 2, 2, 5, 5, '2'];
	 
	 array.remove(number);
	  
	 document.getElementById('res2').innerHTML = "Result: " + array.toString();
 }

 
 /*Problem 3*/
 function cloneObject(obj) {
 if(obj === null || typeof(obj) !== 'object' || 'isActiveClone' in obj)
        return obj;

    var temp = obj.constructor(); 

    for(var key in obj) {
        if(Object.prototype.hasOwnProperty.call(obj, key)) {
            obj['isActiveClone'] = null;
            temp[key] = clone(obj[key]);
            delete obj['isActiveClone'];
        }
    }    

    return temp;
 }

 /*Problem 4*/
 function problem4() {
	var person = {age: 11, name: "person one"};
	var propertyName = document.getElementById('name4').value;
	 
	 document.getElementById('res4').innerHTML = "Result: " + hasProperty(person,propertyName);
	 
 }
 
 function hasProperty(obj, propertyName){
	return obj.hasOwnProperty(propertyName);
 }
 
  /*Problem 5*/
 function problem5() {
	var people = [{ firstname : 'Gosho', lastname: 'Petrov', age: 32 }, 
                  { firstname : 'Bay', lastname: 'Ivan', age: 81},
				  { firstname : 'Rob', lastname: 'Johnson', age: 21} ];
				  
	var youngestPerson = findYoungestPerson(people);
		
	 document.getElementById('res5').innerHTML = "Result: " + youngestPerson.firstname + " " + youngestPerson.lastname;
 }
 
 function findYoungestPerson(people){
	 	var minAge  = people[0].age,
		youngestPerson;
				  
				 
	for(var i = 0; i < people.length; i++){
		if(minAge > people[i].age){
			minAge = people[i].age;
			youngestPerson = people[i];
		}
	}
	return youngestPerson;
 }
 
   /*Problem 6*/
 function problem6() {
	var people = [{ firstname : 'Gosho', lastname: 'Petrov', age: 32 }, 
                  { firstname : 'Bay', lastname: 'Ivan', age: 81},
				  { firstname : 'Rob', lastname: 'Johnson', age: 21} ],	  
		res = "",
	    props = ['firstname', 'lastname', 'age'];
				  
	  for(var i = 0; i < props.length; i++){
			var groups = group(people, props[i]);
			res += 'Group by: ' + props[i] + "<br>";
			    for (var key in groups) {
					res += JSON.stringify(groups[key]) + "<br>";
				}
      }
		
	 document.getElementById('res6').innerHTML = "Result: <br>" + res;
 }
 
 function group(arr, propertyName) {
    var group = [];

    for (var i in arr) {
        var currProp = arr[i][propertyName];
        group[currProp] = group[currProp] || [];
        group[currProp].push(arr[i]);
    }

    return group;
}

