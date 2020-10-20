// Assignment Code; Links the generate button in html file to js
var generateBtn = document.querySelector("#generate");

// Write password to the #password input in the html textarea
function writePassword() {  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//We define the character sets acceptable for our password
var validNumber = Math.floor(Math.random() * 10); //Will return a random number between 0 and 9 (both included)

//We define the generatePassword function first listed in line 6
function generatePassword () {
  var length = prompt("Set the password length with a number of characters between 8 and 20");
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*";
  var randomSelection = "";
  for (var i = 0, n = charset.length; i < length; i++) {
    randomSelection += charset.charAt(Math.floor(Math.random() * n));
  }
  return randomSelection;
}