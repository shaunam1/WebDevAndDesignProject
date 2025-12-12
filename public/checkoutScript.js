let isValid = false;
const displayProductDiv = document.createElement('div');
const submitButton = document.getElementById('buy-now');

const delivery = document.getElementById('delivery');
const paymentDetails = document.getElementById('payment');

const paymentDiv = document.getElementById('paymentResults');
const cardDiv = document.getElementById('cardResults');
const json = localStorage.getItem('form');
const obj = JSON.parse(json); 
const product = localStorage.getItem('productInCart');
const obj2 = JSON.parse(product); 

const registration = localStorage.getItem("loginDetails");
const regEmail = JSON.parse(registration); 

const myDiv = document.getElementById('testDiv');
const emailAddress = document.getElementById('getEmail');
const cardCVV = document.getElementById('cardCVV');

const email = document.getElementById('getEmail');
const firstName = document.getElementById('getFirstName');
const lastName = document.getElementById('getLastName');
const address1 = document.getElementById('getAddress1');
const address2 = document.getElementById('getAddress2');
const address3 = document.getElementById('getAddress3');

submitButton.addEventListener('click', emailValid);

(function checkLoggedIn(event){
   // getJSON();
    if (sessionStorage.getItem('loginState')){
        if(sessionStorage.getItem('loginState') === "Login"){
            delivery.style.display = "none";
            paymentDetails.style.display = "none";
            submitButton.style.display = "none";
            window.alert("Please login to checkout");
            
        }
        else{
            
            delivery.style.display = "block";
            paymentDetails.style.display = "block";
            submitButton.style.display = "block";
            

            
        }

    }
    else{
        delivery.style.display = "none";
        paymentDetails.style.display = "none";
        submitButton.style.display = "none";
        window.alert("Please login to checkout");
        
        
    }
})();
 


(function populateUserDetails(){

       email.value = regEmail.email;
       firstName.value = obj.firstName;
       lastName.value = obj.lastName;
       address1.value = obj.address1;
       address2.value = obj.address2;
       address3.value = obj.address3;

    })();


   (function displayProducts(){
        
        const par1 = document.createElement('p');
        let total = 0;

        if(obj2){
            if(obj2.constructor === Array){
            
            obj2.forEach(product =>{
            par1.innerHTML += product.name + "</br>";
            par1.innerHTML += "€" + product.price + "</br>";
            par1.innerHTML += "</br>"
            total += product.price;
            
            })  
        }
        else{
            
            par1.innerHTML += obj2.name + "</br>";
            par1.innerHTML += "€" + obj2.price+ "</br>";
        }

        }
        
        
        
        let finalTotal = total.toFixed(2);
        par1.innerHTML += "Total: €" + finalTotal;
        

        displayProductDiv.appendChild(par1);
        myDiv.appendChild(displayProductDiv);

    })();

    
  

    
function emailValid(){
        
        if (getEmail.value.includes("@")){
            isValid = true;
            checkBasket(event);
        }
        else{
            isValid = false;
        }
    }

    function checkBasket(event){
        if(obj2 === null){
            event.preventDefault();
            window.alert("There is nothing in your basket!");
        }  
        else{
            compare(event);
        }  

    }
    
    function compare(event){
        paymentDiv.innerText = "";
        cardDiv.innerText = "";
        
        if (cardCVV.value === "123" && emailAddress.value === regEmail.email && firstName.value === obj.firstName && lastName.value === obj.lastName && address1.value === obj.address1 && address2.value === obj.address2 && address3.value === obj.address3){
            cartValue= 0;
            localStorage.setItem('cartCount', cartValue);
            localStorage.removeItem('productInCart');
                                          
        }
        else {
            event.preventDefault();
            if(emailAddress.value !== regEmail.email || firstName.value !== obj.firstName || lastName.value !== obj.lastName || address1.value !== obj.address1 || address2.value !== obj.address2 || address3.value !== obj.address3){
                
                const par = document.createElement('p');
                par.innerText = "The delivery details you have entered do not match those specified in your User Details. Please try again.";
                paymentDiv.appendChild(par);
            }

            if(cardCVV.value !== "123"){
                const par = document.createElement('p')
                par.innerText = "The card details you have entered are incorrect. Please try again.";
                cardDiv.appendChild(par);
            }

       
    }
}