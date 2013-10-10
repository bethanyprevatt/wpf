// Bethany Prevatt, October 10, 2013, Expressions Worksheet

//Dog Years
var dogAge = 5;
var age = 5 * dogAge;

var result = 5 * 7;
console.log(age);

//Slice of Pie Part I
var slices = 8;
var pizzaOrder = 4;
var people = 10;

var result = slices * pizzaOrder/people;
console.log(result);

//Slice of Pie Part II
var slices = 8;
var pizzaOrder = 4;
var people = 10;

var result = slices * pizzaOrder/people;
console.log("Sparky got " + result + " slices of pizza");

//Average Shopping Bill
var groceryBills = [125, 310, 122, 205, 320];

var total = groceryBills[0] + groceryBills[1] + groceryBills[2] + groceryBills[3] + groceryBills[4];
var week = (groceryBills[0] + groceryBills[1] + groceryBills[2] + groceryBills[3] + groceryBills[4])/5;

console.log("You have spent a total of $" + total + " over 5 weeks. That is an average of $" + week + " per week");

//Discounts
var originalPrice = 450;
var discount = .20;
var salesTax = .06;

var withTax = originalPrice * discount;
var withoutTax = originalPrice * discount * salesTax;

console.log("$" + withTax);
console.log("$" + withoutTax);
