// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }
// // when complete this will write the password into the HTML
// document.getElementById("password").innerHTML = password;
// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// function generatePassword(criteria) {
//   var length = prompt(
//     "Please select a password LENGTH. It must be at least 8 characters and no longer than 128"
//   );
//   if (length >= 8 && length <= 128) {
//     alert(
//       "Thank you, next you will select which character types to include. You must select at least one type!"
//     );
//   } else {
//     alert(
//       "You must select a length of at least 8 characters and no more than 128, please begin again."
//     );
//     length = prompt("Please select a password LENGTH. It must be at least 8 characters and no longer than 128");
//   }
//   var lowerCase = confirm("Would you like to include lowercase letters?");
//   if (lowerCase) {
//     alert("You have selected lower case letters");
//   } else {
//     alert("You have excluded lower case letters");
//   }
//   var upperCase = confirm("How about upper case letters?");
//   if (upperCase) {
//     alert("You have selected upper case letters");
//   } else {
//     alert("you have excluded upper case letters");
//   }
//   var numbers = confirm("Numbers as well?");
//   if (numbers) {
//     alert("You have selected numbers");
//   } else {
//     alert("you have excluded numbers");
//   }
//   var special = confirm("Special characters?");
//   if (special) {
//     alert("You have selected special characters");
//   } else {
//     alert("you have excluded special characters");
//   }
//   console.log((criteria = [length, lowerCase, upperCase, numbers, special]));
//   Number(length);
//   length = password.length;
//   // checkTrue(criteria){return true;
//   // }
//   // determine which are false, remove false, return new array.
  
//   criteria.filter(true);

//   console.log(criteria);

//   // take all true criteria 1-4 and generate randomly to match the length

// }
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
function convertCap(){
  var upperCase = lowerCase.toUpperCase;
  console.log(lowerCase);
  console.log(upperCase);
}