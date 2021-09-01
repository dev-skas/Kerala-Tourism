var form = document.getElementById("form");
var email = document.getElementById("inputEmail");
var password = document.getElementById("inputPassword");
var retype = document.getElementById("inputPassword2");
var address = document.getElementById("inputAddress");
var phone = document.getElementById("inputNumber");
var alerts = document.getElementById("message");
var lottie = document.getElementById("lottie");
var checkbox = document.getElementById("gridCheck");



var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var strength = document.getElementById("strength");
var progress = document.getElementById("myProgress");


// expression

var emailtype = /^([\w\d\.-]+)@([\w\d.-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

// /^([\w\d\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

var phoneno =/^(\d{3})[-. ]?(\d{3})[-. ]?(\d{4})$/;

// /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

var passtype = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

// form.addEventListener('submit', event => {
//   event.preventDefault();
//   // actual logic, e.g. validate the form
//   check();
//   console.log('Form submission cancelled.');
// });




function check(){

  var error =0; //variable for final submission

//email check

        if (email.value.trim()=="") {
          document.getElementById("emailcheck").innerText="You can't leave this field blank";
          document.getElementById("emailcheck").style.color="red";
          error =1;
        }else if (emailtype.test(email.value)==false) {
          document.getElementById("emailcheck").innerText="Please enter a valid email address";
          document.getElementById("emailcheck").style.color="red";
           error =1;
        } 

//pssword  check

        if (password.value.trim()=="") {
          document.getElementById("passcheck").innerText="You can't leave this field blank";
          document.getElementById("passcheck").style.color="red";
           error =1;
        }else   if (passtype.test(password.value)==false) {
          document.getElementById("passcheck").innerText="Password not accepted";
          document.getElementById("passcheck").style.color="red";
           error =1;
        }

 //retype password check

         if (retype.value.trim()=="") {
          document.getElementById("retypepass").innerText="You can't leave this field blank";
          document.getElementById("retypepass").style.color="red";
           error =1;
        }else if (retype.value!=password.value) {
          document.getElementById("retypepass").innerText="Your password needs to be same";
          document.getElementById("retypepass").style.color="red";
           error =1;
        } 
        
//adress check        

        if (address.value.trim()=="") {
          document.getElementById("adresscheck").innerText="You can't leave this field blank";
          document.getElementById("adresscheck").style.color="red";
           error =1;
        }

 //phone  check

         if (phone.value.trim()=="") {
          document.getElementById("phonecheck").innerText="You can't leave this field blank";
          document.getElementById("phonecheck").style.color="red";
           error =1;
        }else  if  (phoneno.test(phone.value)==false) {
          document.getElementById("phonecheck").innerText="Please enter a valid phone number";
          document.getElementById("phonecheck").style.color="red";
           error =1;
        } 

//check box check  

        if (checkbox.checked ==false) {
          
          document.getElementById("checklabel").style.color="red";  
          error =1;

        }  else{
          document.getElementById("checklabel").style.color="black";  
        }

// final submission  check

        if (error==1) {

          return false; 

        } else {

          return true;
        }
}
     
      
//   Email Section

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


 
 var i =0;

    var lowerCaseLetters = /[a-z]/g;
  if(password.value.match(lowerCaseLetters)) {  
    i++;

    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
   
  }
  
  // Validate capital letters

  var upperCaseLetters = /[A-Z]/g;
  if(password.value.match(upperCaseLetters)) { 
    i++;
   
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers

  var numbers = /[0-9]/g;
  if(password.value.match(numbers)) { 
    i++;   
    
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length

  if(password.value.length >= 8) {
    i++;    
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }


  // progreesbar section

    if (i==0) {

        strength.innerText = "";
        progress.classList.remove("poor");
        progress.classList.remove("medium");
        progress.classList.remove("strong");

    }else if (i==1) {
        strength.innerText = "- Poor";
        strength.style.color ="red";
        progress.classList.add("poor");
        progress.classList.remove("medium");
        progress.classList.remove("strong");

    }else if (i==2) {
        strength.innerText = "- Medium";
        strength.style.color ="orange";
        progress.classList.add("medium");
        progress.classList.remove("strong");
    }else if (i==3) {
        strength.innerText = "- Medium";
        progress.classList.add("medium");
        progress.classList.remove("strong");
      
    }else if (i==4) {
        strength.innerText = "- Strong";
        strength.style.color ="green";
        progress.classList.add("strong");

    }

}

password.onfocus = function(){
     document.getElementById("passcheck").innerText="Password";
     document.getElementById("passcheck").style.color="black";
     strength.classList.remove("hide");
     alerts.classList.remove("hide");
     lottie.classList.add("hide");
}

password.onblur = function() {
    alerts.classList.add("hide");
    lottie.classList.remove("hide");
    strength.classList.add("hide");
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

// address section

address.onfocus = function(){
  document.getElementById("adresscheck").innerText="Address";
  document.getElementById("adresscheck").style.color="black";

}

// phone no  section


phone.onkeyup = function(){

    if(phone.value.match(phoneno)) {  
          document.getElementById("phonecheck").innerText ="Valid Phone Number";
          document.getElementById("phonecheck").style.color = "green";
      }else{
          document.getElementById("phonecheck").innerText ="Invalid Phone Number";
          document.getElementById("phonecheck").style.color = "red";
      }
   
}

//show pasword section

function reveal(){
  if (document.getElementById("showpass").checked== true) {
  
    password.setAttribute("type", "text");
  
  }else{
    password.setAttribute("type", "password");

  }
}

 





