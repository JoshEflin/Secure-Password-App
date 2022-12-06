// Assignment Code
//  CURRENT BUGS!-
//  click handler time is an eternity

var generateBtn = document.querySelector("#generate");

// create arrays for all the possible characters to be used in the password generator
const upperCase = [];
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const charArray = ["!", "@", "#", "$", "%", "^", "&", "*" , "'" , ";" , "(" , ")" , "-" , "+" , "{" , "}" , "|" , "~"];

// !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
// for loop makes all the lower case letters uppcase for the upperCase array
for (i = 0; i < 26; i++) {
  upperCase.push(lowerCase[i].toUpperCase());
}

// if an invalid input is entered, user can try again. If user fails again, the writePassword starts over at the beginning
function errorMessage() {
  alert("The length you have chosen does not fall in range 8-128. Please try again");
  writePassword();
}

// Write password to the #password input
function writePassword() {
  // declare variables locally so that each time the function is run, the main array and previous password are removed (in case the user has run the function several times)
  // step 1: create an empty array, and an empty string. Allow user input to append the array (with an array i.e.'lowercase letters') using the .push method
  var mainArray = []
  var password = ""
  alert("Hello! you are about to generate a password. Please press 'OK' to choose parameters")
  var userLength = prompt("Your password must be between 8 and 128 characters. How many characters do you want it to be?");

  if (userLength < 8 || userLength > 128) {
    errorMessage();
    // return statement, prevents  the below code from executing  in the event of an invalid input, otherwise the below code will run AFTER the writePassword call on ln 22
    return;
  }

  var lowerLetters = confirm("Would you liked to include lowercase letters: 'OK' for 'YES' ; 'Cancel' for 'NO'");
  if (lowerLetters) {
    mainArray.push(lowerCase)
  }

  var upperLetters = confirm("Would you liked to include uppercase letters: 'OK' for 'YES' ; 'Cancel' for 'NO'");
  if (upperLetters) {
    mainArray.push(upperCase)
  }

  var includeChars = confirm("Would you liked to include special characters: 'OK' for 'YES' ; 'Cancel' for 'NO'");
  if (includeChars) {
    mainArray.push(charArray)
  }
  var includeNums = confirm("Would you liked to include numbers: 'OK' for 'YES' ; 'Cancel' for 'NO'");
  if (includeNums) {
    mainArray.push(numArray)
  }

  //  step 2:  write a for loop to use a randomly generated number to select a nested array, and select a  
  //  value from it, the loop terminates when the length of the password string reaches userLength
  for (i = 0; i < userLength; i++) {
    var subArray = mainArray[Math.floor(Math.random() * 4)];
    console.log(subArray)
    // password = password.concat(subArray[Math.floor(Math.random() * subArray.length)]);
  }
  alert("your  NEW password is " + password);

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);