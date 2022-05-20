// Assignment code here
function generatePassword () {
  var uppercaseCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var lowercaseCharacter ="abcdefghijklmnopqrstuvwxyz";

  var numericChatarcter = "0123456789";

  var specialCharacter = "!#$%&)*+-./:;<=>?@\^ _`({'| } ~, ]";

  var passwordLength;
  var uppercaseCheck;
  var numberCheck;
  var specialCheck;

  //Function used to determine the lenght of the password
  function determineLength() {
    passwordLength = prompt ("Choose how many characters long you'd like your password to be (between 8-128 characters): ");

      if (passwordLength<8){
        alert("Password length must be a between 8-128 characters");
        determineLength();
      }
  }
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
