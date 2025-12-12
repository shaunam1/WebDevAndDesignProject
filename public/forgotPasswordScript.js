//Variables
const newPasswordMessageDiv = document.getElementById('newPasswordMessage');
const submitNew = document.getElementById('submitNewPasswordBtn');

//Event listeners
submitNew.addEventListener('click', newPasswordEmailValid);

//Validate email
function newPasswordEmailValid(event){
    newPasswordMessageDiv.innerHTML = "";
    let isValid = false;
    if (email.value.includes("@")){
        isValid = true;
        comparePasswords(event);
    }
    else{
        isValid = false;
    }
}

//Check that the password and reentered password match
//and inform user 
function comparePasswords(event){
    event.preventDefault();
    if (passwordID.value == reenterPasswordID.value){
        newPasswordMessageDiv.innerHTML = "";
        const successMessage = document.createElement('p');
        successMessage.innerHTML = "Password reset";
        newPasswordMessageDiv.appendChild(successMessage);
        isLoggedIn = true;
        navDetails.innerHTML = "My Details"
        checkoutBasket.innerHTML = "Checkout";
        cartImage.style.display = "block";
        setNewPasswordJSON();
        sessionStorage.setItem('loginState', 'Logout');
    }
    else{
        newPasswordMessageDiv.innerHTML = "";
        const failMessage = document.createElement('p');
        failMessage.innerHTML = "Passwords do not match. Try again";
        newPasswordMessageDiv.appendChild(failMessage);
    }
}

//Set the new password as the password in loginDetails localStorage
function setNewPasswordJSON(){
    const email = document.getElementById('email');
    const emailValue = email.value;
    const password = document.getElementById('passwordID');
    const passwordDetails = password.value;
    const userLoginDetails = 
    {
        "email":emailValue,
        "password":passwordDetails 
    }
    localStorage.setItem("loginDetails", JSON.stringify(userLoginDetails));
}