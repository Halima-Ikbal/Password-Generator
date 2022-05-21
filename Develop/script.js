// The Password generator will provide a password with 8-128  characters based on criteria the user specifies.



// Arrays 
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variable Declaration 
var passwordLength = "";
var SpecialCharacter;
var numericCharacter;
var upperCase;
var lowerCase;

// Prompt to confirm how many characters the user would like in their password
function generatePassword() {
  var passwordLength = (prompt("How many characters would you like your password to contain?"));

  // Loop if answer is outside the parameters 
  while(passwordLength <= 7 || passwordLength >= 51) {
      alert("Password length must be between 8-128 characters Try again!");
      var passwordLength = (prompt("How many characters would you like your password to contain?"));
      } 

    }     

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Assignment Code + Event Listener to prompt questions when button pushed
document.querySelector("#generate").addEventListener("click", writePassword);
