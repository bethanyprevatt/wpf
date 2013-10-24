// functions


/*
calcArea(30, 20);

function calcArea(w, h){
	var area = w * h;
	console.log(area);
}
*/
/*
function dogYears(age){
	var dogYears = age * 7;
	console.log("Sparky is " + dogYears + " years old.");
}
dogYears(4);
dogYears(5);
*/
/*
var total = calcArea(30, 20);

function calcArea(w, h){
	var area = w * h;
	return area; //function spitting the info out
}
console.log(total);
*/

var calcArea = function(width, height){
	var area = width * height;
	return area; 
}
var a = calcArea(20, 30);
console.log(a);