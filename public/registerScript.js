//Variables and Event listener
const registerButton = document.getElementById('register');
registerButton.addEventListener('click', emailValid);
const registerMessageDiv = document.getElementById('registerMessage');

//Validate email
function emailValid(event){
    registerMessageDiv.innerHTML = "";
    let isValid = false;
    if (email.value.includes("@")){
        isValid = true;
        comparePasswords(event);
    }
    else{
        isValid = false;
    }
}
  
//Check password and reenter password match
function comparePasswords(event){
    if (password.value == reenterPassword.value){
        isLoggedIn = true;
        navDetails.innerHTML = "My Details"
        checkoutBasket.innerHTML = "Checkout";
        cartImage.style.display = "block";
        sessionStorage.setItem('loginState', 'Logout');
        setJSON();
    }
    else{
    event.preventDefault();
    registerMessageDiv.innerHTML = "";
    const failMessage = document.createElement('p');
    failMessage.innerHTML = "Passwords do not match. Please try again";
    registerMessageDiv.appendChild(failMessage);
    }
}

//Set registered details as the values in loginDetails localStorage
function setJSON(){
    const email = document.getElementById('email');
    const emailValue = email.value;
    const password = document.getElementById('password');
    const passwordDetails = password.value;
    const userLoginDetails = 
    {
        "email":emailValue,
        "password":passwordDetails 
    }
    localStorage.setItem("loginDetails", JSON.stringify(userLoginDetails));
}