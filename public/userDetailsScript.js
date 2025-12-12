    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const address1 = document.getElementById('address1');
    const address2 = document.getElementById('address2');
    const address3 = document.getElementById('address3');
    const updatedDiv = document.getElementById('userMessage');
        
    const json = localStorage.getItem('form');
    const obj = JSON.parse(json); 


    (function displaySavedDetails(){
        if (json){
            firstName.value = obj.firstName;
            lastName.value = obj.lastName;
            address1.value = obj.address1;
            address2.value = obj.address2;
            address3.value = obj.address3;

        }
        else{
            firstName.value = "";
            lastName.value = "";
            address1.value = "";
            address2.value = "";
            address3.value = "";
        }
        })();
  
        const submitButton = document.getElementById('jsonBtn');
        submitButton.addEventListener('click', addDetailsToJSON);

        function addDetailsToJSON(){
            window.alert("Your details have been updated successfully");
            var data = {
                "firstName":firstName.value,
                "lastName":lastName.value,
                "address1":address1.value,
                "address2":address2.value,
                "address3":address3.value
            }
            
            const json3 = JSON.stringify(data);
            console.log(json3);
            localStorage.setItem('form', json3);
        }