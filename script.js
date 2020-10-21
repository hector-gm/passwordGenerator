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

function generatePassword () {
  //We define the optional character sets for each prompt to be presented to the user   
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numer = "0123456789";
  var symbol = "~!@#$%^&*,?";

  //User is prompted for length of the password
  var passwordLength = parseInt(prompt ("How many characters long do you need your password to be?"))
  //Valid password length is set between 8 and 128 characters (inclusive)
  if (passwordLength<8 || passwordLength>128) {
      alert("Valid password length is at least 8 characters and maximum 128 characters. "+
          "Please try again")
  }
  else {
      console.log("Selected password length is: "+passwordLength);
      //User is prompted to confirm lowercase letters are to be used. Answer is logged
      var confirmLower = confirm ("Want to include lowercase letters?");
      console.log("User is including lowercase characters:"+confirmLower);
      //User is prompted to confirm uppercase letters are to be used. Answer is logged
      var confirmUpper = confirm ("Want to include uppercase letters?");
      console.log("User is including uppercase characters:"+confirmUpper);
      //User is prompted to confirm numbers are to be used. Answer is logged
      var confirmNumeric = confirm ("Want to use numbers?");
      console.log("User is including numeric characters:"+confirmNumeric);
      //User is prompted to confirm symbols are to be used. Answer is logged
      var confirmSymbols = confirm ("Should we include symbols?");
      console.log("User is including symbols:"+confirmSymbols);
  }     
  
  //Initially the character set is empty until the user sets the valid sets to include and use in our randomSelection function

  //The valid character set to be used in the generatePassword function will depend on the following code
  //Maximum character set to be used is "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*";
   
  var characterSet = ""; 
  
  if (confirmLower){
      characterSet+=lower;
  }

  if (confirmUpper){
      characterSet+=upper;
  }

  if (confirmNumeric){
      characterSet+=numer;
  }

  if (confirmSymbols){
      characterSet+=symbol;
  }
  console.log(characterSet);

  //Random selection from character strings is defined below
  
  var randomSelection = "";
   for (var i=0; i<passwordLength; i++){
     randomSelection += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
   }
   console.log(randomSelection);
   return randomSelection;     
}