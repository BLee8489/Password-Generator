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

// document.querySelector("#generatepassword").addEventListener("click", generatePassword)


// Create arrays for lowercase uppercase special characters and numeric
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialcharacters = ["!", "*", ".", "$", "/", "?", "@", "&"]
var numerics = [1, 2, 3, 4, 5, 6, 7, 8, 9]


function generatePassword() {
    var possibles = []

    var length = prompt("How long would you like your password to be?");
    length = parseInt(length);
    if (length < 8 || length > 128) {
        alert("Please make the length more than 8 characters and less than 128 characters")
    }
    return;

    var confirmLower = confirm("Would you like lowercase letters?");
    var confirmUpper = confirm("Would you like uppercase letters?");
    var confirmSymbols = confirm("Would you like any special characters?");
    var confirmNumbers = confirm("Would you like any numbers?");

    if (confirmLower) possibles.push(lowercase)
    if (confirmUpper) possibles.push(uppercase)
    if (confirmSymbols) possibles.push(symbols)
    if (confirmNumbers) possibles.push(numbers)
}

var pw = ""

while (pw.length < length) {
    for (let i = 0; i < possibles.length; i++) {
        if (pw.length < length) {
            let rand = Math.floor(Math.random() * possibles[i].length)
            pw += possibles[i][rand]
        }


        // 