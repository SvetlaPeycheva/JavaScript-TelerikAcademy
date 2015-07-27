
/*Problem 1*/
 function createPerson(firstname, lastname, age, gender){
	 return {
		 firstname:firstname,
		 lastname:lastname,
		 age:age,
		 gender:gender
	 };
 }
 
 function createPeople() {
	 var arr = [
		createPerson("Anton", "Ivanov", 35, false),
		createPerson("Petar", "Petrov", 22, false),
		createPerson("Anna", "Kirilova", 27, true),
		createPerson("Jana", "Tosheva", 40, true),
		createPerson("Ivan", "Angelov", 30, false),
		createPerson("Georgi", "Iliev", 24, false),
		createPerson("Lidiya", "Ivanov", 20, true),
		createPerson("Yoana", "Peycheva", 12, true),
		createPerson("Margarit", "Margaritov", 13, false),
		createPerson("Grozdan", "Grozev", 39, false),
	 ];
	 
	 return arr;
	
 }
 
 
 /*Problem 2*/
 
 function checkAge() {
	 var persons = createPeople();
	 
	 var result = persons.every(function(p){
		 return p.age >= 18;
	 }) 
	 
	 console.log("Problem 2:" + result);
 }
 
checkAge();

/*Problem 3*/

function underAge() {
	 var persons = createPeople();
	 
	 var result = persons.filter(function(item, index){
		 return item.age < 18;
	 });
	 console.log("Problem 3: ");
	 result.forEach(function(item){
		 console.log(JSON.stringify(item));
	 });
	 
 }
 
underAge();


/*Problem 4*/

function ageFemales(){
	var persons = createPeople();
	 
	var result = persons.filter(function(item, index){
		 return item.gender == true;
	 });
	 
	var sumAge = result.reduce(function(s, item){
		return item.age + s;
	},0);
 console.log("Problem 4: " + sumAge/result.length);
}
ageFemales();


/*Problem 5*/
if (!Array.prototype.find) {
    Array.prototype.find = function (callback) {
        var i, len = this.length;
        for (i = 0; i < len; i += 1) {
            if (callback(this[i], i, this)) {
                return this[i];
            }
        }
    }
}

function youngestPeople(){
	var persons = createPeople();
	
	 var result =  persons
	               .sort(function (first, second) {
					   return first.age - second.age;
					   })
                   .find(function(person) {
					   return !person.gender;
					   });
		 
		console.log("Problem 5: " + JSON.stringify(result));
}
youngestPeople();

/*Problem 6*/

function groupPeople(){
	var persons = createPeople();
	
	var groups = persons.reduce(function (gr, person) {
    var letter = person.firstname[0];

    if (gr[letter]) {
        gr[letter].push(person);
    } else {
        gr[letter] = [person];
    }

    return gr;
}, {});
		 
		console.log("Problem 6: " + JSON.stringify(groups));
}
groupPeople();