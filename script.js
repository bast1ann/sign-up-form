const passwords = document.querySelectorAll("input[type='password']");
const passwordOne = document.querySelector("#password");
const passwordTwo = document.querySelector("#confirm-password");

passwords.forEach( (item) => item.addEventListener("keyup", function() {
  passwordsMatch(passwordOne, passwordTwo) ? 
  passwordTwo.className = "valid" :
  passwordTwo.className = "invalid";
}) );

function passwordsMatch(pass1, pass2) {
  if (pass1.value == pass2.value) {
    return true;
  }
  else {
    return false;
  }
}

