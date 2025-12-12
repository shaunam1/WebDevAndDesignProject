//Variables
const current = sessionStorage.getItem('loginState');
const cartCount = localStorage.getItem('cartCount');
let cart = document.getElementById('cartCount');
cart.innerHTML = cartCount;

//Event listeners
let logInOut = document.getElementById('log');
let navDetails = document.getElementById('userInfo');
let checkoutBasket = document.getElementById('checkoutBasket');
let cartImage = document.getElementById('cartImage');

//Check if there is a value stored in loginState sessionStorage
if (sessionStorage.getItem('loginState')){
    logInOut.innerHTML = sessionStorage.getItem('loginState');
    let currentState = sessionStorage.getItem('loginState');
    //If user is logged out
    if (currentState === 'Login'){
        navDetails.innerHTML = "";
    }
    //If user is logged in
    else{
        navDetails.innerHTML = "My Details";
    } 
}
//Set user to logged out
else{
    logInOut.innerHTML = "Login";
    navDetails.innerHTML = "";    
}





