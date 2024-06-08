// ! signup function =====>
var signUpName = document. getElementById('singUpName');
var signUpEmail = document. getElementById('signUpEmail');
var signUpPassword = document. getElementById('signUpPassword');
var singUpBtn = document.getElementById('singUpBtn')
var success = document.getElementById('success')
var noData = document.getElementById('noData')
var loginEmail = document.getElementById('loginEmail')
var loginPassword = document.getElementById('loginPassword')
var emptyLogin= document.getElementById('emptyLogin')
var loginBtn = document.getElementById('loginBtn')
var incorrectUser = document.getElementById('incorrectUser')
var loginR = document.getElementById('login')
var signUpForm =[];



// singUpBtn.addEventListener( 'click' , addAcc);
function Empty() {

    if (signUpName.value == "" || signUpEmail.value == "" || signUpPassword.value == "") {
        return false
    } else {
        return true
    }
}
function validEmail() {
    var  emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    var isMailValid = emailRegex.test(signUpEmail.value);
    signUpEmail.classList.remove('is-valid' , 'is-invalid');
    if (isMailValid) { 
        console.log('match');
        signUpEmail.classList.add('is-valid')
        document.getElementById('emailAlert').classList.replace('block','d-none')
    } else{
        return(
        signUpEmail.classList.add('is-invalid'),
        document.getElementById('emailAlert').classList.replace('d-none','block'))
    }  
}
function validPassword() {
    var  passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
    var isPasswordValid = passwordRegex.test(signUpPassword.value);
    signUpPassword.classList.remove('is-valid' , 'is-invalid');
    if (isPasswordValid) { 
        console.log('match');
        signUpPassword.classList.add('is-valid')
        document.getElementById('passwordAlert').classList.replace('block','d-none')
    } else{
        return(
        signUpPassword.classList.add('is-invalid') ,
        document.getElementById('passwordAlert').classList.replace('d-none','block'))
    }  
}
function signedBefore() {
    var term= signUpEmail.value.toLowerCase();
    for (var i = 0; i < signUpForm.length; i++) {
            var isIncluded = signUpForm[i].email.toLowerCase().includes(term);
            if (isIncluded) {
             return (document.getElementById('emailExitsAlert').classList.replace('d-none','block')
            , signUpEmail.classList.add('is-invalid'))
            }
            
        } 
    
}

function addAcc() {
    console.log ('hi')
        if (Empty() == false) {
            noData.classList.replace('d-none','block')
            return false
        }
    var signUpValue ={
        name: signUpName.value ,
        email: signUpEmail.value,
        password: signUpPassword.value
    }
    signedBefore();
    signUpForm.push(signUpValue)
    localStorage.setItem("allAcc",JSON.stringify(signUpForm))
    success.classList.replace('d-none','block')
    
}
function LoginEmpty() {

    if (loginEmail.value == "" || loginPassword.value == "") {
        return false
    } else {
        return true
    }
}
function login() {
    console.log('hi')
    if (LoginEmpty() == false) {
        emptyLogin.classList.replace('d-none','block')
        return false
    }
    for (var i = 0; i < signUpForm.length; i++) {
        if (signUpForm[i].email.toLowerCase() == loginEmail.value.toLowerCase() && signUpForm[i].password.toLowerCase() == loginPassword.value.toLowerCase()) {
            
            loginR.href.add('./home.html')
           
        } else {
            incorrectUser.classList.replace('d-none','block')
            
        }
    }
    
}
// loginBtn.addEventListener('click' , login);

























