//conditional logic = else if

var kidHeight = 52;
var minHeight = 48;
var parentHeight = 45; //height of the kid with the parent

//if the child is old enough print to the console "you can ride!"
//if the kid is over 48 inches in height
if(kidHeight > minHeight){
	// you can ride
	console.log("You can ride the coaster!");
}else if(kidHeight > parentHeight){
	//you can ride with a parent present
	console.log("You can ride, but only with a parent present.")
}else{
	//sorry you have growing to do
	console.log("Sorry kid, you've got some growing to do first!")
}

//conditional logic - logical operators

var budget = 100;
var iPhonePrice = 199.99;
var wonLottery = true;

//if the price of the phone is less our budget and if our paycheck is over 300
if(iPhonePrice < budget || wonLottery){
	console.log("We can buy the phone!");
}else{
	console.log("No phone for you.");
}

//Ternary Operators

var gpa = 48;

//if the gpa is over the 2.0 score, the student can graduate
/*if(gpa > 2.0){
	console.log("You can graduate!");
}else{
	console.log("GPA is too low!");
}
*/
(gpa > 2.0) ? console.log("You can graduate!") : console.log("GPA is too low!");

var age = 6;
var book;

//If the child is under 10, they get green eggs and ham, otherwise they get The Time Machine
/*if(age < 10){
	book = "Green Eggs and Ham";
}else{
	book = "The Time Machine";
}
console.log(book);*/

book = (age < 10) ? "Green Eggs and Ham" : "The Time Machine";
console.log(book);