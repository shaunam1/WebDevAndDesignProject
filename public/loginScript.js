//Variables
let loginOrLogout = document.getElementById('log');

//If no value stored in loginState
//set state to logged out
if (sessionStorage.getItem('loginState')){
    loginOrLogout.innerHTML = sessionStorage.getItem('loginState');
}
else{
    loginOrLogout.innerHTML = "Login";
}

//Variables
let isLoggedIn = false;
const json = localStorage.getItem('loginDetails');
const obj = JSON.parse(json); 
const loginButton = document.getElementById('loginBtn');
loginButton.addEventListener('click', emailValid);
const emailAddress = document.getElementById('loginEmail');
const messageDiv = document.getElementById('loginMessage');
const loginPassword = document.getElementById('loginPasswordID');
const disappear = document.getElementById('disappear');
const disappear2 = document.getElementById('disappear2');
let state = sessionStorage.getItem('loginState');
const logout = document.getElementById('logoutBtn');
logout.addEventListener('click', logUserOut);


(function newFunction(){
    //If loginState has a stored value
    if(state){
        if(state === "Login"){
            //If logged out
            loginButton.style.display = "block";
            logout.style.display = "none";
            disappear.style.display = "block";
            disappear2.style.display = "block";
        }
        else{
            //If logged in
            loginButton.style.display = "none";
            logout.style.display = "block";
            disappear.style.display = "none";
            disappear2.style.display = "none";   
        }
    }
    //If not
    else{
        //Logged out
        loginButton.style.display = "block";
        logout.style.display = "none";
        disappear.style.display = "block";
        disappear2.style.display = "block";
    }
})();

  
//Validate email
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

//Check that entered details match saved login details
function compareToRegisteredDetails(event){
    event.preventDefault();
    messageDiv.innerText = "";
    //If details match
    if(obj){
        if((emailAddress.value == obj.email) && (loginPassword.value == obj.password)){
            const successMessage = document.createElement('p');
            successMessage.innerHTML = "You are now logged in."
            messageDiv.appendChild(successMessage);
            isLoggedIn = true;
            navDetails.innerHTML = "My Details"
            checkoutBasket.innerHTML = "Checkout";
            cartImage.style.display = "block";
            //Change display on login page
            if(loginButton.style.display === "none" && logoutBtn.style.display === "display"){
            loginButton.style.display = "block";
            logout.style.display = "none";
            disappear.style.display = "block";
            disappear2.style.display = "block";
            cartImage.style.display = "none";
            }
            else{
            loginButton.style.display = "none";
            logout.style.display = "block";
            disappear.style.display = "none";
            disappear2.style.display = "none";
            }
            changeLoginState();
            }
            //If details don't match
            else{
            messageDiv.innerText = "";
            const failMessage = document.createElement('p');
            failMessage.innerHTML = "Email or password is incorrect."
            messageDiv.appendChild(failMessage);
            }
        }
        else{
            if((emailAddress.value == "wmitty@email.com") && (loginPassword.value == "password")){
                const successMessage = document.createElement('p');
                successMessage.innerHTML = "You are now logged in."
                messageDiv.appendChild(successMessage);
                isLoggedIn = true;
                navDetails.innerHTML = "My Details"
                checkoutBasket.innerHTML = "Checkout";
                cartImage.style.display = "block";
                //Change display on login page
                if(loginButton.style.display === "none" && logoutBtn.style.display === "display"){
                loginButton.style.display = "block";
                logout.style.display = "none";
                disappear.style.display = "block";
                disappear2.style.display = "block";
                cartImage.style.display = "none";
                }
                else{
                loginButton.style.display = "none";
                logout.style.display = "block";
                disappear.style.display = "none";
                disappear2.style.display = "none";
                }
                changeLoginState();
            }
        //If details don't match
        else{
            messageDiv.innerText = "";
            const failMessage = document.createElement('p');
            failMessage.innerHTML = "Email or password is incorrect."
            messageDiv.appendChild(failMessage);
        }
    }
}


//If user clicks Logout
function logUserOut(){
    loginButton.style.display = "block";
    logout.style.display = "none";
    disappear.style.display = "block";
    disappear2.style.display = "block";
    isLoggedIn = false;
    changeLoginState();
}

//Depending on whether user is logged in or out
//Change state stored in loginState sessionStorage
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