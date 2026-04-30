// This section contains the defined constants//
const userName = prompt('What is your Name? :', '').trim();
const age = Number(prompt('How old are you? :', '').trim());

//Here are the conditionals that ask for the customer's age.//
if (isNaN(age)) {
  console.error('Please, must be numbers.');
  alert('Error: You must enter a number for age.');
} else if (age >= 18) {
  //Here is the conditional statement that says if they are of legal age.//
  alert(
    `Hello ${userName}, you are  ${age} years old and you're  of legal age. Get ready for great opportunities!`
  );
} else {
  //Here is the conditional statement that is executed if the user is a minor.//
  alert(
    `Hello ${userName}, you are ${age} years old and you are a minor. Keep learning!`
  );
}
