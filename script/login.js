var password = document.getElementById("inputPassword");
var email = document.getElementById("inputEmail");

var emailtype = /^([\w\d\.-]+)@([\w\d.-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
var passtype = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

email.onkeyup = function(){

    if(email.value.match(emailtype)) {  
          document.getElementById("emailerror").innerText ="Valid Email";
          document.getElementById("emailerror").style.color = "green";
      }else{
          document.getElementById("emailerror").innerText ="Invalid Email";
          document.getElementById("emailerror").style.color = "red";
      }
   
}
password.onkeyup = function(){

    if(password.value.match(passtype)) {  
          document.getElementById("passerror").innerText ="Valid Password";
          document.getElementById("passerror").style.color = "green";
      }else{
          document.getElementById("passerror").innerText ="Invalid Password";
          document.getElementById("passerror").style.color = "red";
      }
}

function check(){
  var error=0;
    if (email.value.trim()=="") {
        document.getElementById("emailerror").innerText="You can't leave this field blank";
        document.getElementById("emailerror").style.color="red";
        error =1;
      }
      else if (emailtype.test(email.value)==false) {
        document.getElementById("emailerror").innerText="Please enter a valid email address";
        document.getElementById("emailerror").style.color="red";
        error =1;
      } 
      
      if (password.value.trim()=="") {
        document.getElementById("passerror").innerText="You can't leave this field blank";
        document.getElementById("passerror").style.color="red";
        error =1;
      }else if (passtype.test(password.value)==false) {
        document.getElementById("passerror").innerText="Password not accepted";
        document.getElementById("passerror").style.color="red";
        error =1;
       }

      // final submission  check

      if (error==1) {

        return false; 

      } else {

        return true;
      }
}

