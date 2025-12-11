//Cart Count
const current = localStorage.getItem('loginState');
const cartCount = sessionStorage.getItem('cartCountJSON');
let cart = document.getElementById('cartCount');
cart.innerHTML = cartCount;

//Login or Logout
let logInOut = document.getElementById('log');
if (sessionStorage.getItem('loginState')){
    logInOut.innerHTML = sessionStorage.getItem('loginState');
    
}
else{
    logInOut.innerHTML = "Login";
}





