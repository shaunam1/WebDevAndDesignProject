//Variables
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const address1 = document.getElementById('address1');
const address2 = document.getElementById('address2');
const address3 = document.getElementById('address3');
const updatedDiv = document.getElementById('userMessage');
const json = localStorage.getItem('form');
const obj = JSON.parse(json); 

//Display the details saved in form localStorage
(function displaySavedDetails(){
    //If form has details
    if (json){
        firstName.value = obj.firstName;
        lastName.value = obj.lastName;
        address1.value = obj.address1;
        address2.value = obj.address2;
        address3.value = obj.address3;
    }
    //If it doesn't
    else{
        firstName.value = "";
        lastName.value = "";
        address1.value = "";
        address2.value = "";
        address3.value = "";
    }
})();

//Event listener
const submitButton = document.getElementById('jsonBtn');
submitButton.addEventListener('click', addDetailsToJSON);

//Update form with new details
function addDetailsToJSON(){
    
    var data = {
        "firstName":firstName.value,
        "lastName":lastName.value,
        "address1":address1.value,
        "address2":address2.value,
        "address3":address3.value
    }
    if(firstName.value != "" && lastName.value != "" && address1.value != "" && address2.value != "" && address3.value != ""){
        const json3 = JSON.stringify(data);
        console.log(json3);
        localStorage.setItem('form', json3);
        window.alert("Your details have been updated successfully");

    }
    
}