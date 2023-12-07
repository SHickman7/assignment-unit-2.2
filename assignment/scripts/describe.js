// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We create a string variable called 'name' with the value 'Dane'.
// We then set up a conditional where if the name variable is strictly equal to 'Mary'
//    we would console.log 'Hi, Mary!'.  If the name variable is not strictly equal to 'Mary'
//    (it has any other value), we will console.log 'How do you do?' 
// Since our name variable ('Dane') is not strictly equal to 'Mary', we console.log 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We declare a variable named 'secret'.
// We create a variable with the number value 123.
// We then go down to the if statement. This statement says if our variable 
//    code is strictly equal to 123, we assign the string 'super' to be the value of 
//    our secret variable.  Andd code is reassigned the value code times two, which is 246.
// We then go down to the next if statement.  This reads if code is greater than 250, we
    //re-assign the value to secret to be 'duper'.  
    //since our code equals 246 (which is not greater than 250), we console.log 'super'.

//CODE
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

// 3. WRITE YOUR DESCRIPTION HERE
// We create a boolean variable named isStudent which is set to true.
// We create a variable called age which is assigned the number value 34.
// We create a variable called zip which is assigned to the number value 55407.
// We then have a chain of if/else if/else statements.  We go down that list of 
    //statements and the first one that is true is applied and we jump out of the code.
// The first statement is if the isStudent boolean is true AND the zip value is greater than 80000
    // we would console.log 'You're a student on the West Coast'.  In our case, our zip is not greater 
    // than 80000, so we proceed to the next statement. 
// The second statement says if the isStudent boolean is false OR the age variable is less than 30
  // we would console.log 'What are your hobbies?'  Neither of these things are true for our variables,
  // so we proceed to the 3rd statement.
//  The third statement says if the isStudent boolean value is true, we console.log 'Welcome to Prime!'
  // This is the case for us, so we would console.log 'Welcome to Prime!' and exit the code.
  //We don't have to worry about the final else statement

//CODE
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




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - the instructions say colorOne is set to 'blue' and colorTwo
  // is set to 'red'; these values are reversed in the code below. 
  // the code should read let colorOne = 'blue';  let colorTwo = 'red'; 
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  //FIX - the instructions say if mix is true, both colorOne and ColorTwo 
    //are set to purple.  In the code below, only colorOne is set to purple.
    //colorTwo should be set to purple as well.  
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

//FIX - instructions say we check if temp is higher than 39 AND if time is
    //greater than or equal to 4.  But the code uses || which means OR.  To fix the
    //code, || should be replaced by &&.  
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

