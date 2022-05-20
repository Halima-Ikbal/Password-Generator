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
      }else if (passwordLength>128) {
        alert("Password lenght must be a number between 8-128 characters");
        determineLength();
      }else{
        alert("The next three screens will ask you what types of characters you would like to be included in your passwords.\nIf you choose 'No' for all, your password will only contain lowercase letters.");
      }
      return passwordLength;
  }

  //Function used to determine whether the user wants to include uppercase characters in the password

  function determineUppercase(){
    uppercaseCheck = prompt("Do you want to include uppercase letters in your password? \n(Yes or No)");
      uppercaseCheck = uppercaseCheck.toLowerCase();

      if (uppercaseCheck === null || uppercaseCheck === "") {
        alert("Please answer Yes or No");
        determineUppercase();
      }else if (uppercaseCheck ==="yes" || uppercaseCheck === "y"){
        uppercaseCheck = true;
        return uppercaseCheck;
      }else if (uppercaseCheck ==="no" || uppercaseCheck === "n"){
        uppercaseCheck = false;
        return uppercaseCheck;
      }else {
        alert ("Please answer Yes or No");
        determineUppercase();
      }
      return uppercaseCheck;
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
