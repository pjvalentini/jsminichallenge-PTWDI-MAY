/* 1. Create a script with two variables, each assigned to a number.
Add them together and output the result to the console
Now do the same with two strings. */

// Created 2 vars ans added them in the console.
var num1 = 10;
var num2 = 20;
// Console.log adding the two vars together to add the numbers together.
console.log(num1 + num2);

// Created two vars with strings and added them to the console.
var soccerTeam = "Arsenal";
var statement = " is the best football team in Europe!";
// Console.log adding the two vars together to add the strings to make one scentence.
console.log(soccerTeam + statement);



/* 2 Create a multidimensional array related to a subject that interests you.
Output two of the items in sub-arrays to the console.*/

var favSoccerTeams = [["PSG","AC Milan", "Arsenal"], ["NY Cosmos", "NYCFC", "LA GaLaxy"]];
console.log(favSoccerTeams[0][2]); // Favorite Soccer Team in Europe - Arsenal.
console.log(favSoccerTeams[1][0]); // Favorite US Soccer team - NY Cosmos



/* 3. Write a script that checks if a variable is less than 100. If it is,
alert the user that their variable is less than 100.
If it is not alert the user of what the value was and that it was greater than 100. */

// Created var number with 99. I will test if that numner is less than 100.
var number = 99;
// Testing the number...Alert if less than 100 or greater than 100.
if (number < 100) {
	alert("The number is 99 and > 100");
} else {
	alert("The number is 101 and < than 100");
}


/* 4 Declare a function that takes a name as an argument and tells
the user what name they've entered. Try running it after it has been declared.*/

// Created var with name "Philip", this will be the name that has been entered
var userName = "Philip";
function printName(name) {
	console.log(name + " is the name that has been entered!");
}
// Created var names with an Array of names assigned to it.
var names = ["Bill", "PJ", "Jen"];
// Run the function enteredName() with a string to confirm that the name entered is "Philip".
printName(userName);
// Passing in the indexes of the array in to the function.
printName(names[0]); // prints "Bill is the name that as been entered"
printName(names[1]); // prints "PJ is the name that as been entered"
printName(names[2]); // prints "Jen is the name that as been entered"


// Or this is another way to do this exercise.....
function person(name) {
  return "You have entered the name" + name;
}
console.log(person(" PJ."));
console.log(person(" Bill."));
console.log(person(" Joe."));



/* 5 Declare a function that depending upon which virtual 'door'
was entered tells the user they've received a different 'prize'
in an alert. After declaring the function, try running it with different options.
There must be at least 3 doors. */

// Created a function that will offer a prize depending on whick door is chosen.
function checkBehindDoor(doorNumber) {
// Setting the var prize which will have different Str reassigned to it based on the door.
	var prize;
// Testing each door with a different prize. Then returning the variable prize.
	if (doorNumber === 1) {
		prize = "A NEW CAR!";
	} else if (doorNumber === 2) {
		prize = "A new washer dryer!";
	} else if (doorNumber === 3) {
		prize = "It's a goat for milking!";
	} else {
		prize = "It's a box of dog biscuits!";
	}
	return prize;
}

// Printing to console to check to see if output is working.
console.log(checkBehindDoor(1));
console.log(checkBehindDoor(2));
console.log(checkBehindDoor(3));
console.log(checkBehindDoor(4));

// Alerting to the screen for final output.
alert(checkBehindDoor(1));
alert(checkBehindDoor(2));
alert(checkBehindDoor(3));
alert(checkBehindDoor(4));
