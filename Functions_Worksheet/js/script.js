// Bethany Prevatt, October 24, 2013, Functions Worksheet

//circumference c=3.14*d

var circle = function(diameter, pie){
	var circumference = diameter * pie;
	return circumference; 
}
var a = circle(25, 3.14);
console.log("The circumference of the circle is " + a);


//stung

var beeSting = function(pound, stings){
	var stings = pound * stings;
	return stings;

}
var a = beeSting(25, 8.666666667);
console.log("It takes " + a + " bee stings to kill this animal.");