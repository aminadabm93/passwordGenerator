// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  //checks if at least one criteria was passed
  while(password=="null"){
    alert("please select at least one of the criteria");
    var password = generatePassword();
  }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  //prompt length of pass 8-128
  var pass="";
  var passLength = parseInt(prompt("Enter a length for the password, anywhere from 8-128"));
  console.log("The length is: "+passLength);
 
  //confirm for lowercase, uppercase, numeric, and/or special 
  var hasLower = confirm("Would you like lower case letters in your password?");
  var hasUpper = confirm("Would you like upper case letters in your password?");
  var hasNumeric = confirm("Would you like numbers in your password?");
  var hasSpecial = confirm("Would you like special characters in your password?");

  //checks to see if they selected at least one criteria
  if((hasLower||hasUpper||hasNumeric||hasSpecial)&&passLength>0){
    var possibleChars = [];
    //creates array depending on criteria 
    if(hasLower){
      for(var i=97; i<123;i++){
        possibleChars.push(String.fromCharCode(i));
      }
      console.log("The password includes lower case");
    }
    if(hasUpper){
      for(var i=65; i<91;i++){
        possibleChars.push(String.fromCharCode(i));
      }
      console.log("The password includes uppper case");
    }
    if(hasNumeric){
      for(var i=48; i<58;i++){
        possibleChars.push(String.fromCharCode(i));
      }
      console.log("The password includes numbers");
    }
    if(hasSpecial){
      var specials = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");
      possibleChars = possibleChars.concat(specials);
      console.log("The password includes special chars");
    }
    console.log(possibleChars);

    // create random password from array
    for(var i=0;i<passLength;i++){
      var temp = pass;
      var n = Math.floor(Math.random()*possibleChars.length);
      pass = pass.concat(possibleChars[n]);      
    }
    return pass;
  }
  else{
    return "null";
  }
  
}