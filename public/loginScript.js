//Login or Logout
let loginOrLogout = document.getElementById('log');
if (sessionStorage.getItem('loginState')){
    loginOrLogout.innerHTML = sessionStorage.getItem('loginState');
    
}
else{
    loginOrLogout.innerHTML = "Login";
}
const json = localStorage.getItem('loginDetails');
const obj = JSON.parse(json); 
const loginButton = document.getElementById('loginBtn');
loginButton.addEventListener('click', emailValid);
const emailAddress = document.getElementById('loginEmail');
const messageDiv = document.getElementById('loginMessage');
const loginPassword = document.getElementById('loginPasswordID');
const disappear = document.getElementById('disappear');
const disappear2 = document.getElementById('disappear2');
let isLoggedIn = false;
let state = sessionStorage.getItem('loginState');
const logout = document.getElementById('logoutBtn');
logout.addEventListener('click', logUserOut);


(function newFunction(){
    if(state){
        if(state === "Login"){
            loginButton.style.display = "block";
            logout.style.display = "none";
            disappear.style.display = "block";
            disappear2.style.display = "block";
            
        }
        else{
            loginButton.style.display = "none";
            logout.style.display = "block";
            disappear.style.display = "none";
            disappear2.style.display = "none";
            
        }
    }
    else{
        loginButton.style.display = "block";
        logout.style.display = "none";
        disappear.style.display = "block";
        disappear2.style.display = "block";
}
    
})();

        
function emailValid(event){
    messageDiv.innerHTML = "";
    let isValid = false;
    if (emailAddress.value.includes("@")){
        isValid = true;
        compareToRegisteredDetails(event);
    }
    else{
        isValid = false;
    }
}

function compareToRegisteredDetails(event){
    event.preventDefault();
    messageDiv.innerText = "";
    if((emailAddress.value == obj.email) && (loginPassword.value == obj.password)){
        const successMessage = document.createElement('p');
        successMessage.innerHTML = "You are now logged in."
        messageDiv.appendChild(successMessage);
        isLoggedIn = true;
        navDetails.innerHTML = "My Details"
        checkoutBasket.innerHTML = "Checkout";
        
        if(loginButton.style.display === "none" && logoutBtn.style.display === "display"){
        loginButton.style.display = "block";
        logout.style.display = "none";
        disappear.style.display = "block";
        disappear2.style.display = "block";
        
    }
    else{
         loginButton.style.display = "none";
         logout.style.display = "block";
         disappear.style.display = "none";
         disappear2.style.display = "none";
       
    }
    changeLoginState();
    }
    else{
        messageDiv.innerText = "";
        const failMessage = document.createElement('p');
        failMessage.innerHTML = "Email or password is incorrect."
        messageDiv.appendChild(failMessage);
    }
}

function logUserOut(){
    loginButton.style.display = "block";
        logout.style.display = "none";
        disappear.style.display = "block";
        disappear2.style.display = "block";
        isLoggedIn = false;
         changeLoginState();
}

function changeLoginState(){
    if(isLoggedIn === true){
        loginOrLogout.innerHTML = "Logout";
        sessionStorage.setItem('loginState', 'Logout');
    }
    else{
         loginOrLogout.innerHTML = "Login";
         sessionStorage.setItem('loginState', 'Login');
    }  
}