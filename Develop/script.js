// The Password generator will provide a password with 8-128  characters based on criteria the user specifies.



// Arrays 
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~", "@", ")", "(", "}", "{", "|", "^", "]", "["];
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
  while(passwordLength <= 8 || passwordLength >= 128) {
      alert("Password length must be between 8-128 characters Try again!");
      var passwordLength = (prompt("How many characters would you like your password to contain?"));
      } 
      // Repeat back how many charactes the user will have  
      alert(`Your password will have ${passwordLength} characters`);

    // Determine parameters of password 
    var SpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
    var numericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
    var lowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
    var upperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
      // Loop if answer is outside the parameters 
      while(upperCase === false && lowerCase === false && SpecialCharacter === false && numericCharacter === false) {
        alert("You must choose at least one parameter");
        var SpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
        var numericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
        var lowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
        var upperCase = confirm("Click OK to confirm if you would like to include uppercase characters");   
    } 

      // Assign an action to the password parameters NEED TO FIX THIS
      var passwordCharacters = []
      
    if (SpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (numericCharacter) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (lowerCase) {
      passwordCharacters = passwordCharacters.concat(alphaLower)
    }

    if (upperCase) {
      passwordCharacters = passwordCharacters.concat(alphaUpper)
    }

      console.log(passwordCharacters)

      // Empty string to be filled based on for loop selecting random characters from the array
      var randomPassword = ""
      
      for (var i = 0; i < passwordLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

      

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Assignment Code + Event Listener to prompt questions when button pushed
document.querySelector("#generate").addEventListener("click", writePassword);
