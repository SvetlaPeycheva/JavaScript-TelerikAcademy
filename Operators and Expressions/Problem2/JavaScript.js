
var n1 = 3;
var n2 = 0;
var n3 = 5;
var n4 = 7;
var n5 = 35;
var n6 = 140;

document.getElementById("p2").innerHTML =
"Is 3 divisible by 7 and 5? " + (n1 % 5 == 0 && n1 % 7 == 0) + "</br>" + 
"Is 0 divisible by 7 and 5? " + (n2 % 5 == 0 && n2 % 7 == 0) + "</br>" +
"Is 5 divisible by 7 and 5? " + (n3 % 5 == 0 && n3 % 7 == 0) + "</br>" +
"Is 7 divisible by 7 and 5? " + (n4 % 5 == 0 && n4 % 7 == 0) + "</br>" +
"Is 35 divisible by 7 and 5? " + (n5 % 5 == 0 && n5 % 7 == 0) + "</br>" +
"Is 140 divisible by 7 and 5? " + (n6 % 5 == 0 && n6 % 7 == 0);