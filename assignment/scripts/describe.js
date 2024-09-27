// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct.
// Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// DESCRIBE the code as it would be run, then let us know what the OUTCOME of the
// console.log statement will be.


// 0. (EXAMPLE!)
// DESCRIPTION:
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. If it is,
// 'yes' will be console.logged.
// OUTCOME:
// 'yes' is what is logged.

// CODE:
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}
*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //


// 1.
// DESCRIPTION
// We are declaring that name will be assigned the value of Dane, this is a string variable
// We are then setting a conditional where:
// If our declaration is and exact match to the value or assignemnt of Mary then:
// The console will declare "Hi, Mary!"
// However if the previous code is false and name equals to another value then it will console out:
// "How do you do?", because name has been declared as "Dane"
//
// OUTCOME:
// 'How do you do?' is what will be logged on the console.

// CODE:
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}
*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //

// 2.
// DESCRIPTION:
// We are declaring secret but we are leaving it undefined, while at the same time we are declaring code and giving it the value 123
// The condition if ( code === 123 ) is checking if the value of code is exactly 123
// Since the statement is true it the block code inside of it will run and set the value of secret as 'super' and code is updated to change from 123 to 246.
// The second if statement is checking if code is greater than 250, if it is secret will run "duper"
//
// OUTCOME:
// Because the new value of code is less that 250 it will continue to run 'Super'

// CODE:
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)
*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //

// 3.
// DESCRIPTION
// we are declaring and assigning the value of isStundet with a boolean, true
// we are also declaring and assigning the value of age as 34 and the value of zip as 555407
// The first if statement is checking to see if isStudent is true and their zip coode is above 8000, which if both statements are true it will output "You're a student on the West Coast!"
// The first else if statement is then asking if one of the above is false then it will check if not a student are they under 30, which will output "What are your hobbies?" if those two are true
// The second else if, just checks if they are a student, if they are the output is 'Welcome to Prime!'
// If all else fails then it will output 'How about the weather?'
//
// OUTCOME:
// Because thhis is a student but not on the westcoast by having a zip greater than 8000, 
// then we go on to the second to see if they are not a student and under 30, 
// however they are a student and over 30 so we go to the next conditional which asks if they are just a student,
// they are a student so we reach the end and the output will be 'Welcome to Prime!'

// CODE:
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //


// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// 0. (EXAMPLE!)
// DESCRIPTION:
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

// CODE:
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}
*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //

// 4. 
// DESCRIPTION:
// We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

// FIX the code only sets colorOne and not colorTwo, the if block should be updated then
// Another FIX is that the description does not match the code colorOne and colorTwo should be flipped with the assigned values

// CODE:
/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //

// 5.
// DESCRIPTION:
// We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

// FIX the description is saying that the compound conition has to be both sides must be true
// FIX to fix the code instead of using || which means that either side can be true it should be replaced by && which states both sides must be true
// CODE:
/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //

// 6.
// DESCRIPTION:
// We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

// FIX the console log outputs need to be switched
// CODE:
/*
let age = 21;
const minAge = 21;

if(minAge <= age) { 
  console.log('no entry');
} else {
  console.log('enter');
}
*/
