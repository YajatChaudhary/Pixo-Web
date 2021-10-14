
function validation() {
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let cpassword = document.getElementById('cpassword').value;
    if(fname == ""){
        document.getElementById('firstname').innerHTML = "**Please fill the first name field";
        return false;
    }
    if(!isNaN(fname)){
        document.getElementById('firstname').innerHTML="**Only characters are allowed.";
        return false;
    }
    
    if(lname == ""){
        document.getElementById('lastname').innerHTML = "**Please fill the last name field";
        return false;
    }
    if(!isNaN(lname)){
        document.getElementById('lastname').innerHTML="**Only characters are allowed.";
        return false;
    }
    if(email == ""){
        document.getElementById('emailname').innerHTML = "**Please fill the email field";
        return false;
    }
    if(email.indexOf('@') <= 0){
        document.getElementById('emailname').innerHTML="**Please enter valid email Id";
        return false;
    }
    if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){
        document.getElementById('emailname').innerHTML="**Please enter valid email Id";
        return false;
    }

    if(password == ""){
        document.getElementById('passwordname').innerHTML = "**Please fill the password field";
        return false;
    }
    if(password.length < 6){
        document.getElementById('passwordname').innerHTML = "**Password must be atleast of 6 digits";
        return false;
    }
    if(cpassword == ""){
        document.getElementById('cpasswordname').innerHTML = "**Please fill the confirm password  field";
        return false;
    }
    if(password!=cpassword){
        document.getElementById('cpasswordname').innerHTML = "**Password and Confirm Password should be same";
        return false;
    }
}  
