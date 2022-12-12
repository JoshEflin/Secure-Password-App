//  The program below  will execute when the user clicks on a generate button ---calledby: click (ln 89)---, a perfect name for our first variable!

var generateBtn = document.querySelector("#generate");

// Create arrays for all the possible characters to be used in the password generator.
const upperCase = [];
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const charArray = ["!", "@", "#", "$", "%", "^", "&", "*", "'", ";", "(", ")", "-", "+", "{", "}", "|", "~"];

// for loop makes all the lower case letters uppcase for the upperCase array
for (i = 0; i < 26; i++) {
  upperCase.push(lowerCase[i].toUpperCase());
}

const mainArray = [upperCase, lowerCase, numArray, charArray];
const prompts = ["uppercase letters", "lowercase letters", "special characters", "numbers"]
// charTypes declared  globally to be used in two functions
const charTypes = document.querySelector(".card");

// if an invalid input is entered, user can try again. If user fails again, the writePassword() ---function def: ln 37 called ln:89 calledby:writePassword()--- starts over at the beginning
function errorMessage() {
  alert("The length you have chosen does not fall in range 8-128. Please input a number between 8 and 128");
  writePassword();
}
// The removePrevious() ---Def: ln 30 calledby:writepassword()--- removes <p> tags that have been appended to the div.card incase the user would like to generate more passwords 
function removePrevious() {
  let child = document.querySelectorAll(".test");
  for (i = 0; i < child.length; i++) {
    charTypes.removeChild(child[i]);
  }
}
// Write password to the #password input
function writePassword() {
  // declare variables locally so that each time the function is run, the main array and previous password are removed (in case the user has run the function several times)
  // step 1: create an empty array, and an empty string. These will be used later

  var userArray = [];
  var password = "";
  alert("Hello! you are about to generate a password. Please press 'OK' to choose parameters")

  var userLength = prompt("Your password must be between 8 and 128 characters. How many characters do you want it to be?");
  //  In case user inputs a string, mulitply string by a number. This will change its type to NaN which we can test for using the .is() method and send the user to our error message.
  var numTest = userLength * 2;
  if (Object.is(numTest, NaN) || userLength < 8 || userLength > 128) {
    errorMessage();
    return;
  }
  // This return statement  prevents  the below code from executing  in the event of an invalid input, otherwise the below code will continue to
  // run AFTER the writePassword() call  within the  errormessage() function. 

  removePrevious();

  // step 2: Ask the user  which arrays should be inlcuded in the password generator algorithm. .push() them to the userArray, and append them to the HTML in case the user forgot selection
  // if the user is running the function multiple times ---removePrevious()  def: ln 30 called:ln55--- will restore the HTML file to its original state.
  for (i = 0; i < mainArray.length; i++) {

    confirmResponse = confirm("would you like to include " + prompts[i] + ": 'OK' for 'YES' ; 'Cancel' for 'NO'")
    if (confirmResponse) {
      userArray.push(mainArray[i]);
      var newElement = document.createElement("p");
      newElement.setAttribute("class", "test")
      newElement.textContent = "You selected to use " + prompts[i];
      alert(" You have selected to include " + prompts[i]);
      charTypes.appendChild(newElement)
    }
    else {
      alert("You have selected NOT to include " + prompts[i])
    }
  }
  //  step 3: Write a for loop to use a randomly generated number to select a nested array, and another randomly generated number to  select a  
  //  value from it, the loop terminates when the length of the password variable ---declared ln:42--- string reaches userLength
  for (i = 0; i < userLength; i++) {
    var subArray = userArray[Math.floor(Math.random() * userArray.length)];

    password = password.concat(subArray[Math.floor(Math.random() * subArray.length)]);
  }

  alert("your NEW password is " + password);

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);