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

var lower = [
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
var upper =
  ["A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = [
  " ",
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
]; 
  var criteria = [];
  var length; 
  var chkLower;
  var chkUpper;
  var chkNumber;
  var chkSpecial;

function generatePassword() {
  var finalPassword = ""
  criteria = []

  length = prompt(
    "Please select a password length of at least 8 characters, but no longer than 128"
  );
  while (length < 8 || length > 128) { 
    alert("Password length does not meet criteria.")
    length = prompt(
    "Please select a valid number of at least 8 characters, but no longer than 128"
    );
  } 
  alert(
    "Thank you. Please confirm which character types to include. You must select at least one type!"
  );
  chkLower = confirm("Would you like to include lowercase letters?");
  if (chkLower) { 
  criteria = criteria.concat(lower)
  };
  chkUpper = confirm("What about uppercase letters?");
  if (chkUpper) {
  criteria = criteria.concat(upper);
  };
  chkNumber = confirm("Numbers as well?");
  if (chkNumber) {
  criteria = criteria.concat(numbers);
  };
  chkSpecial = confirm("Special characters?");
  if (chkSpecial){
  criteria = criteria.concat(special);
  };
  for (var i = 0; i < length; i++) {
    var randomNumberGen = Math.floor(Math.random() * criteria.length);
    finalPassword = (finalPassword + criteria[randomNumberGen]);
    password = finalPassword;
  }
  // when complete this will write the password into the HTML
  document.getElementById("password").innerHTML = password; 
  return password;
}
 

  

  
  
    






    
  
    
     
