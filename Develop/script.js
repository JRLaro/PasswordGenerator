//Prompting the user to select desired length of Password between 8-128
 
var userInput = prompt("Select desired length of Password between 8-28 characters");

// if user selects number less than 8 - alert (Selection must be within 8-28 characters)

// if (userInput >= 8) {
//   userChoice();
  
// }
//   else {
//     prompt("Selection must be within 8-28 characters.");
// }

if(userInput <8 || userInput > 28){
  alert("It is recommended to have a password between 8 and 28 characters.");
}
 else {
   userChoice();
 }


 else{
  if(confirm("Would you like your password to contain upper case letters?"));

  }

  if(confirm("Would you like your password to contain lower case letters?"));
  }

  if(confirm("Would you like your password to contain numbers?"));
  }

  if(confirm("Would you like your password to contain symbols?"));
  }

  if(allChars.length===0){
      alert("You must select at lease 1 type of characters to generate a password!\nPlease start over.");
  }






//  while (userInput) {
//   prompt("Select desired length of Password between 8-28 characters");
// }


// Write a function that prompts user if the want specialCharacter, number, lowerCase, upperCase

function userChoice() {
if (userSpecial = confirm("Would you like to use Special Characters?");

}
if (userNumber = confirm("Would you like to use Numbers?");
if (userUpper = confirm("Would you like to use Upper Case Letters?");
if (userLower = confirm("Would you like to user Lower Case Letters?");


}



// if user selects number that is between 8-28 then... prompted to select if special character


//










// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Create Variables
Character = [""]
var userSpecial = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
];
// Array of numeric characters to be included in password
var userNumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var userLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
// Array of uppercase characters to be included in password
var userUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];


// Prompt the User to begin
 


// The function







/