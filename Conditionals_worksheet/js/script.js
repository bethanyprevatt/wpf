//Bethany Prevatt October 17, 2013, Conditionals Worksheet

//Last Change for Gas

var mpg = 35;
var gasTank = 15;
var capacity = 25;

if(gasTank > 40){
	// don't need to stop
	console.log("Yes, you can make it without stopping for gas!");
}else{
	//you will need to fill your tank
	console.log("You only have " + gasTank + " gallons of gas in your tank, better get gas now while you can");
}

//check the login

var username = "JohnSmith";
var password = "truck";

if(username === "JohnSmith" && password === "truck"){
	console.log("Welcome, " + username + "!");
}else if(username != "JohnSmith"){
	console.log("User not found, try again.");
}else{
	console.log("Password does not match our records.");
}