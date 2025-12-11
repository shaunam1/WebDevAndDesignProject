 const paymentDiv = document.getElementById('payment');
    const cardDiv = document.getElementById('card');

    const json = localStorage.getItem('form');
    const obj = JSON.parse(json); 
    const product = sessionStorage.getItem('productInCart');
    const obj2 = JSON.parse(product); 
    const registration = localStorage.getItem("loginDetails");
    const regEmail = JSON.parse(registration); 

    const myDiv = document.getElementById('testDiv');

    //IIFE to populate the user details field of the form
    //uses localStorage loginDetails for the email
    //uses localStorage form for the rest
    (function populateUserDetails(){
       const email = document.getElementById('getEmail');
       const firstName = document.getElementById('getFirstName');
       const lastName = document.getElementById('getLastName');
       const address1 = document.getElementById('getAddress1');
       const address2 = document.getElementById('getAddress2');
       const address3 = document.getElementById('getAddress3');

       email.value = regEmail.email;
       firstName.value = obj.firstName;
       lastName.value = obj.lastName;
       address1.value = obj.address1;
       address2.value = obj.address2;
       address3.value = obj.address3;

    })();


    (function displayProducts(){
        const productDiv = document.createElement('div');
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
        

        productDiv.appendChild(par1);
        myDiv.appendChild(productDiv);

    })();

    const productDiv = document.getElementById('productDetails');
    const submitButton = document.getElementById('buy-now');
    submitButton.addEventListener('click', emailValid);
    const emailAddress = document.getElementById('getEmail');
    const firstName = document.getElementById('getFirstName');
    const lastName = document.getElementById('getLastName');
    const address1 = document.getElementById('getAddress1');
    const address2 = document.getElementById('getAddress2');
    const address3 = document.getElementById('getAddress3');
    
    function emailValid(){
        paymentDiv.innerHTML = "";
        let isValid = false;
        if (getEmail.value.includes("@")){
            isValid = true;
            checkBasket();
        }
        else{
            sValid = false;
        }
    }

    function checkBasket(){
        if(obj2 === null){
            const par1 = document.createElement('p');
            par1.innerHTML += "There is nothing in your basket!";
            paymentDiv.appendChild(par1);
            window.alert("There is nothing in your basket!");
        }  
        else{
            compare();
        }  

    }
    
    function compare(){
       
        paymentDiv.innerText = "";
        cardDiv.innerText = "";
        
        if (cardCVV.value === "123" && emailAddress.value === regEmail.email && firstName.value === obj.firstName && lastName.value === obj.lastName && address1.value === obj.address1 && address2.value === obj.address2 && address3.value === obj.address3){
            const par = document.createElement('p');
            par.innerText = "Thank you for your order. You will receive an email with details";
            paymentDiv.appendChild(par);
            let cartValue= 0;
            sessionStorage.setItem('cartCountJSON', cartValue);
            sessionStorage.removeItem('productInCart');
            window.location.reload();
                                          
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