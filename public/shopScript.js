//Variables
const lead = document.getElementById('dogLeadBtn');
const dogBowl = document.getElementById('dogBowlBtn');
const scratchPost = document.getElementById('scratchingPostBtn');
const catToy = document.getElementById('catToyBtn');
const catBowl = document.getElementById('catBowlBtn');
const dogToy = document.getElementById('dogToyBtn');
const lead2 = document.getElementById('dogLeadBtn2');
const dogBowl2 = document.getElementById('dogBowlBtn2');
const scratchPost2 = document.getElementById('scratchingPostBtn2');
let currentCart = localStorage.getItem('productInCart');
let data = new Array();

getJSON();

//Because I'm passing parameters the function automatically runs
//to avoid this I used callback functions
lead.addEventListener('click', () => addToCart('product1'));
dogBowl.addEventListener('click', () => addToCart('product2'));
scratchPost.addEventListener('click', () => addToCart('product3'));
catToy.addEventListener('click', () => addToCart('product4'));
catBowl.addEventListener('click', () => addToCart('product5'));
dogToy.addEventListener('click', () => addToCart('product6'));
lead2.addEventListener('click', () => addToCart('product7'));
dogBowl2.addEventListener('click', () => addToCart('product8'));
scratchPost2.addEventListener('click', () => addToCart('product9'));

//Set products in products localStorage
function setJSON(){
    const productsArray =
    {"products":
        [
            {
                "id": "product1",
                "name": "Dog Lead",
                "description1": "Blue dog lead",
                "description2": "One size fits all",
                "price": 5.49
        

            },
            {
                "id": "product2",
                "name": "Dog Food Bowl",
                "description1": "Silver dog food bowl",
                "description2": "Made from stainless steel",
                "price": 4.95
            },
            {
                "id": "product3",
                "name": "Cat Scratching Post",
                "description1": "Pretty pink cat scratching post",
                "description2": "70cm tall",
                "price": 15.99
            },
            {
                "id": "product4",
                "name": "Cat Toy",
                "description1": "Wind up toy mouse",
                "description2": "Wind it up and watch your cat get hours of fun",
                "price": 4.89   
            },
            {
               "id": "product5",
               "name": "Cat Food Bowl",
               "description1": "Cat food bowl in the shape of a cat's face",
               "description2": "Suitable for cats of all ages",
               "price": 3.95
            },
            {
             "id": "product6",
             "name": "Dog Toy",
             "description1": "Rope dog toy",
             "description2": "Perfect for tug of war",
             "price": 7.75
         }
        ]
    }
    localStorage.setItem("products", JSON.stringify(productsArray));
}

function getJSON(){
//I know this method is overly complicated but I was unable to create product cards in the style
//I wanted unless I created each one individually
    const divOne = document.getElementById('product1');
    const divTwo = document.getElementById('product2');
    const divThree = document.getElementById('product3');
    const divFour = document.getElementById('product4');
    const divFive = document.getElementById('product5');
    const divSix = document.getElementById('product6');
    const divSeven = document.getElementById('product7');
    const divEight = document.getElementById('product8');
    const divNine = document.getElementById('product9');

    const json = localStorage.getItem('products');
    const obj = JSON.parse(json); 
    const productsArray = obj.products;

    const name1 = document.createElement('h5');
    name1.innerHTML = productsArray[0].name;
    const desc1 = document.createElement('p');
    desc1.innerHTML =  productsArray[0].description1;
    const desc2 = document.createElement('p');
    desc2.innerHTML =  productsArray[0].description2;
    const price = document.createElement('p');
    price.innerHTML = "€" + productsArray[0].price;

    const nameTwo = document.createElement('h5');
    nameTwo.innerHTML = productsArray[1].name;
    const descTwo1 = document.createElement('p');
    descTwo1.innerHTML =  productsArray[1].description1;
    const descTwo2 = document.createElement('p');
    descTwo2.innerHTML =  productsArray[1].description2;
    const priceTwo = document.createElement('p');
    priceTwo.innerHTML = "€" + productsArray[1].price;

    const nameThree = document.createElement('h5');
    nameThree.innerHTML = productsArray[2].name;
    const descThree1 = document.createElement('p');
    descThree1.innerHTML =  productsArray[2].description1;
    const descThree2 = document.createElement('p');
    descThree2.innerHTML =  productsArray[2].description2;
    const priceThree = document.createElement('p');
    priceThree.innerHTML = "€" + productsArray[2].price;

    const nameFour = document.createElement('h5');
    nameFour.innerHTML = productsArray[3].name;
    const descFour1 = document.createElement('p');
    descFour1.innerHTML =  productsArray[3].description1;
    const descFour2 = document.createElement('p');
    descFour2.innerHTML =  productsArray[3].description2;
    const priceFour = document.createElement('p');
    priceFour.innerHTML = "€" + productsArray[3].price;

    const nameFive = document.createElement('h5');
    nameFive.innerHTML = productsArray[4].name;
    const descFive1 = document.createElement('p');
    descFive1.innerHTML =  productsArray[4].description1;
    const descFive2 = document.createElement('p');
    descFive2.innerHTML =  productsArray[4].description2;
    const priceFive = document.createElement('p');
    priceFive.innerHTML = "€" + productsArray[4].price;

    const nameSix = document.createElement('h5');
    nameSix.innerHTML = productsArray[5].name;
    const descSix1 = document.createElement('p');
    descSix1.innerHTML =  productsArray[5].description1;
    const descSix2 = document.createElement('p');
    descSix2.innerHTML =  productsArray[5].description2;
    const priceSix = document.createElement('p');
    priceSix.innerHTML = "€" + productsArray[5].price;

    const nameSeven = document.createElement('h5');
    nameSeven.innerHTML = productsArray[0].name;
    const descSeven1 = document.createElement('p');
    descSeven1.innerHTML =  productsArray[0].description1;
    const descSeven2 = document.createElement('p');
    descSeven2.innerHTML =  productsArray[0].description2;
    const priceSeven = document.createElement('p');
    priceSeven.innerHTML = "€" + productsArray[0].price;

    const nameEight = document.createElement('h5');
    nameEight.innerHTML = productsArray[1].name;
    const descEight1 = document.createElement('p');
    descEight1.innerHTML =  productsArray[1].description1;
    const descEight2 = document.createElement('p');
    descEight2.innerHTML =  productsArray[1].description2;
    const priceEight = document.createElement('p');
    priceEight.innerHTML = "€" + productsArray[1].price;

    const nameNine = document.createElement('h5');
    nameNine.innerHTML = productsArray[2].name;
    const descNine1 = document.createElement('p');
    descNine1.innerHTML =  productsArray[2].description1;
    const descNine2 = document.createElement('p');
    descNine2.innerHTML =  productsArray[2].description2;
    const priceNine = document.createElement('p');
    priceNine.innerHTML = "€" + productsArray[2].price;

    divOne.appendChild(nameSeven);
    divOne.appendChild(descSeven1);
    divOne.appendChild(descSeven2);
    divOne.appendChild(priceSeven);

    divTwo.appendChild(nameEight);
    divTwo.appendChild(descEight1);
    divTwo.appendChild(descEight2);
    divTwo.appendChild(priceEight);

    divThree.appendChild(nameNine);
    divThree.appendChild(descNine1);
    divThree.appendChild(descNine2);
    divThree.appendChild(priceNine);
    
    divFour.appendChild(nameFour);
    divFour.appendChild(descFour1);
    divFour.appendChild(descFour2);
    divFour.appendChild(priceFour);

    divFive.appendChild(nameFive);
    divFive.appendChild(descFive1);
    divFive.appendChild(descFive2);
    divFive.appendChild(priceFive);

    divSix.appendChild(nameSix);
    divSix.appendChild(descSix1);
    divSix.appendChild(descSix2);
    divSix.appendChild(priceSix);

    divSeven.appendChild(name1);
    divSeven.appendChild(desc1);
    divSeven.appendChild(desc2);
    divSeven.appendChild(price);

    divEight.appendChild(nameTwo);
    divEight.appendChild(descTwo1);
    divEight.appendChild(descTwo2);
    divEight.appendChild(priceTwo);

    divNine.appendChild(nameThree);
    divNine.appendChild(descThree1);
    divNine.appendChild(descThree2);
    divNine.appendChild(priceThree);
}

//Variables
let cartValue;
let localCount = localStorage.getItem('cartCount');
cart = document.getElementById('cartCount');

//If there is not a current cart count set to zero
if (localCount === "NaN"){
    cart.innerHTML = 0;
    localStorage.setItem('cartCount', 0);
}
//If there is set to existing count
else{
    cart.innerHTML = localStorage.getItem('cartCount');
}

//If there is a current cart count set cartValue as count
if (localCount){
    let count = localStorage.getItem('cartCount');
    cartValue = parseInt(count, 10);
  } 
else{
    //If there is not
    cartValue = 0;
}

//Increment basket and alert user
function addToCart(productID){
    cartValue++;
    cart.innerHTML = cartValue;
    localStorage.setItem('cartCount', cartValue);
    moveToBasket(productID);
    window.alert("Item added to basket");
}

//Add the selected product to productInCart localStorage
function moveToBasket(productID){
    const json = localStorage.getItem('products');
    const obj = JSON.parse(json); 
    const productsArray = obj.products;

    for(let i = 0; i < 6; i++){
        if (productID == productsArray[i].id){
            data.push(productsArray[i]);
            const json = JSON.stringify(data);
            localStorage.setItem('productInCart', json);
        }
    }
}

