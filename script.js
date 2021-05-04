// select button
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to button
generateBtn.addEventListener("click", writePassword);

let lower = [
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
let upper =
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

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let special = [
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
  let criteria = [];
  let length; 
  let chkLower;
  let chkUpper;
  let chkNumber;
  let chkSpecial;

function generatePassword() {
  let buildPassword = ""

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
  for (let i = 0; i < length; i++) {
    let randomNumberGen = Math.floor(Math.random() * criteria.length);
    buildPassword = (buildPassword + criteria[randomNumberGen]);
    password = buildPassword;
  }
  // when complete this will write the password into the HTML
  document.getElementById("password").innerHTML = password; 
  return password;
}
 

  

  
  
    






    
  
    
     
