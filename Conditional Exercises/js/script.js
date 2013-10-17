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


