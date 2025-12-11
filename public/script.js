//Cart Count
const current = localStorage.getItem('loginState');
const cartCount = sessionStorage.getItem('cartCountJSON');
let cart = document.getElementById('cartCount');
cart.innerHTML = cartCount;

//Login or Logout
let logInOut = document.getElementById('log');
let navDetails = document.getElementById('userInfo');
let checkoutBasket = document.getElementById('checkoutBasket');
if (sessionStorage.getItem('loginState')){
    logInOut.innerHTML = sessionStorage.getItem('loginState');
    let currentState = sessionStorage.getItem('loginState');
    if (currentState === 'Login'){
        navDetails.innerHTML = "";
        checkoutBasket.innerHTML = "";
    }
    else{
        navDetails.innerHTML = "My Details";
        checkoutBasket.innerHTML = "Checkout";
    }
   
    
}
else{
    logInOut.innerHTML = "Login";
    navDetails.innerHTML = "";
    checkoutBasket.innerHTML = "";
    
     
}





