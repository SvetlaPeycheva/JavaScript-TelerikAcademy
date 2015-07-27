/*Problem 1*/
 function problem1(){
	 var testString = "123456abc";
	 
	 console.log("Problem 1");
	 
	 console.log("Original string: " + testString);
	 console.log("Reversed string: " + reverse(testString));
 }
 
 function reverse(str){
	return str.split('').reverse().join('');
 }
 
problem1();

/*Problem 2*/
 function problem2(){
	 var expression = "(a+2)(d*(4-7))";
	 var openBracketsCount,
	     closeBracketsCount;

	console.log("Problem 2");
	 
	openBracketsCount = expression.split('(').length;
	closeBracketsCount = expression.split(')').length;
	
	console.log("Is (a+2)(d*(4-7)) correct: " + (openBracketsCount == closeBracketsCount));
	
	expression = "(a+2))d*(4-7))";
	openBracketsCount = expression.split('(').length;
	closeBracketsCount = expression.split(')').length;
	
    console.log("Is (a+2))d*(4-7)) correct: " + (openBracketsCount == closeBracketsCount));
 }

 
problem2();

/*Problem 3*/
function problem3(){
	var text = "The text is as follows: We are living in an yellow submarine. We don't have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days";
	var count = 0;
	
	console.log("Problem 3");
	console.log(text)
	
    var index = text.indexOf('in');
	
    while (index >= 0) { 
    	index = text.indexOf('in', index + 1);
	    count++;
    }
	
	console.log('I found your word ' + count + ' times.');
}

problem3();


/*Problem 4*/
function problem4(){
	var text = 'We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don\'t</mixcase> have <lowcase>anything</lowcase> else.';
	var res = replaceUpper(text);
	    res = replaceLower(res);
	    res = replaceMix(res);
	
	console.log("Problem 4");
	
	console.log(res);
}
problem4();

function replaceUpper(text) {
    var result;
    result = text.replace(/<upcase>([^<]+)<\/upcase>/gi, function (match, firstGroup) {
        return firstGroup.toUpperCase();
    });

    return result;
}

function replaceLower(text) {
    var result;
    result = text.replace(/<lowcase>([^<]+)<\/lowcase>/gi, function (match, firstGroup) {
        return firstGroup.toLowerCase();
    });

    return result;
}

function replaceMix(text) {
    var result;

    result = text.replace(/<mixcase>([^<]+)<\/mixcase>/gi, function (match, firstGroup) {
        return makeMixcase(firstGroup);
    });

    function makeMixcase(word) {
        var i,
            number,
            res = '';

        for (i = 0; i < word.length; i++) {
            number = Math.round(Math.random());

            switch (number) {
                case 0:
                    res += word[i].toLowerCase();
                    break;
                case 1:
                    res += word[i].toUpperCase();
                    break;
            }
        }

        return res;
    }

    return result;
}
/*Problem 5*/
function problem5() {
    var input = "Sample test with white space",
        result = replaceWhiteSpace(input);       
        console.log('Problem 5: ' + result);
}

function replaceWhiteSpace(text) {
    return (text.split(/\s/g).join('&nbsp;'));
}

problem5();

/*Problem 6*/
function problem6(){
	var input = '<html><head><title>Sample site</title></head><body><div>text<div>more text</div>and more...</div>in body</body></html>';
	var result = input.replace(/<[^>]*>/g, '');
	
	console.log('Problem 6: ' + result);
}

problem6();

/*Problem 7*/
function problem7(){
	 var url = 'http://host.bg/api/page1',
        resultObj = {},
        result = '',
        firstSlash = url.indexOf('/'),
        secondSlash = url.indexOf('/', firstSlash + 1),
        thirdSlash = url.indexOf('/', secondSlash + 1);

    resultObj.protocol = url.substring(0, url.indexOf(':'));
    resultObj.server = url.substring(secondSlash + 1, thirdSlash);
    resultObj.resource = url.substring(thirdSlash);

    console.log('Problem 7:');
		
    for (var prop in resultObj) {
        result += prop + ': ' + resultObj[prop] + '; ';
    }
    console.log('Sample URL: ' + url);
	console.log('Result: ' + result);

}

problem7();

/*Problem 8*/
function problem8(){
	 var input = '<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>';

    console.log('Problem 8:');

    while (input.indexOf('<a href') >= 0) {
        input = input.replace('<a href="', '[URL=').
        replace('">', ']').
        replace('</a>', '[/URL]');
    }
	
    console.log(input);
   
}

problem8();


/*Problem 9*/
function problem9(){
var input = "ddd@sdf.com sdd sddf@sdf.net dfg dg d";

 console.log('Problem 9:');

 console.log( input.match(/[A-z0-9]+@[A-z0-9]+.[A-z]{2,3}/g));
}

problem9();

/*Problem 10*/
function problem10(){
	

}

problem10();

/*Problem 11*/
function problem11(){
	var formatStr = 'This {0} test {1}';
	var result = formatString(formatStr, 'is', 'mesage');

	 console.log('Problem 11:');
	 console.log(result);

}
function formatString(){
 var args = arguments,
     inputString = arguments[0],
	 index;
	 
	for(var i = 1; i < arguments.length; i++){
	  inputString = inputString.replace('{' + (i-1) + '}', arguments[i]);
	}
	
	return inputString;
}

problem11();

/*Problem 12*/
function problem12(){
	var template = '<strong>-{name}-</strong> <span>-{age}-</span>';
	var people = [{name: 'Peter', age: 14}, {name: 'Ivan', age: 10}, {name: 'Martin', age: 89}];

    var peopleList = generateList(people, template);

	console.log('Problem 12:');
	console.log(peopleList);
}

function replaceTemplateForPerson(person, template) {
    template = template.replace('-{name}-', person.name);
    template = template.replace('-{age}-', person.age);

    return template;
}

function generateList(people, template) {
    var result = '<ul>';

    for (var i = 0; i < people.length; i++) {
        var person = people[i];
        result += '<li>' + replaceTemplateForPerson(person, template) + '</li>';
    }

    result += '</ul>';

    return result;
}


problem12();