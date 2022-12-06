// Assignment Code
var generateBtn = document.querySelector("#generate");

// create arrays for all the possible characters to be used in the password generator
var upperCase = []; 
const lowerCase = ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z"]
// for loop makes all the lower case letters uppcase for the upperCase array
for (i = 0 ; i < 26 ; i ++) {
  upperCase.push(lowerCase[i].toUpperCase());
}
var numArray = [ "0" , "1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9"];
var charArray = ["!" , "@" , "#" , "$" , "%" , "^" , "&" , "*"];


// if an invalid input is entered, user can try again. If user fails again, the writePassword starts over at the beginning
function errorMessage() {
  alert("The length you have chosen does not fall in range 8-128. Please try again");
  userLength = prompt("Enter a number between 8 and 128");
}
// Write password to the #password input
function writePassword() {
  alert("Hello! you are about to generate a password. Please press 'OK' to choose parameters")
  var userLength = prompt("Your password must be between 8 and 128 characters. How many characters do you want it to be?");
  if (userLength < 8 || userLength > 128) {
    errorMessage();

  } if (userLength < 8 || userLength > 128) {
    alert("invalid input, password generator reinitializing")
    writePassword();
  }

  var lowerLetters = confirm("Would you liked to include lowercase letters: 'OK' for 'YES' ; 'Cancel' for 'NO'");

  var upperLetters = confirm("Would you liked to include uppercase letters: 'OK' for 'YES' ; 'Cancel' for 'NO'");

  var includeChars = confirm("Would you liked to include special characters: 'OK' for 'YES' ; 'Cancel' for 'NO'");

  var includeNums = confirm("Would you liked to include numbers: 'OK' for 'YES' ; 'Cancel' for 'NO'");

  //  I need to create an array of arrays. nested arrays are toggled on and off depending on user input answers (should be boolean values)
  // use Math.random() to select items from arrays that are "toggled" on.  use Math.Random to select which nested array should have a random value selected
  // step 1: create an empty array, allow user input to append the array(with an array i.e.'lowercase letters' ) using the .push method
  //  step 2:  write a for loop to use a randomly generated number to select a nested array, and a value from it, the loop terminates when its value reaches userLength


  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);