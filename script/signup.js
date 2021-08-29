var email = document.getElementById("inputEmail");
var password = document.getElementById("inputPassword");
var retype = document.getElementById("inputPassword2");
var address = document.getElementById("inputAddress");
var phone = document.getElementById("inputNumber");
var alerts = document.getElementById("message");
var lottie = document.getElementById("lottie");

var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");


//   Email Section

var emailtype =  /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;




email.onkeyup = function(){

    if(email.value.match(emailtype)) {  
          document.getElementById("emailcheck").innerText ="Valid Email";
          document.getElementById("emailcheck").style.color = "green";
      }else{
          document.getElementById("emailcheck").innerText ="Invalid Email";
          document.getElementById("emailcheck").style.color = "red";
      }
   
}

//   Password Section

password.onkeyup = function(){

    var lowerCaseLetters = /[a-z]/g;
  if(password.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(password.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(password.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(password.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }


}

password.onfocus = function(){
 
    alerts.classList.remove("hide");
    lottie.classList.add("hide");
    

}

password.onblur = function() {
    alerts.classList.add("hide");
    lottie.classList.remove("hide");
    

}

// retype password section


retype.onkeyup = function(){

    if(retype.value == password.value) {  
          document.getElementById("retypepass").innerText ="Password matched";
          document.getElementById("retypepass").style.color = "green";
      }else{
          document.getElementById("retypepass").innerText ="Incorrect password";
          document.getElementById("retypepass").style.color = "red";
      }
   
}

// phone no  section

var phoneno =/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

phone.onkeyup = function(){

    if(phone.value.match(phoneno)) {  
          document.getElementById("phonecheck").innerText ="Valid Phone Number";
          document.getElementById("phonecheck").style.color = "green";
      }else{
          document.getElementById("phonecheck").innerText ="Invalid Phone Number";
          document.getElementById("phonecheck").style.color = "red";
      }
   
}