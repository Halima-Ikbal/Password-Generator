// Assignment code here
function generatePassword () {
  var uppercaseCharacter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',];

  var lowercaseCharacter =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',];

  var numericChatarcter = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  var specialCharacter = [ '!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '\', '^', '_ ', ' ` ', '{', '|', '}', '~', ]
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);