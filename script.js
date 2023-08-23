let bookPrice = 789;
let quantity = 1;
let totalPrice = document.querySelector('.totalprice')
let productQuantity = document.querySelector('.qty-btn')
let price = document.querySelector('.bookPrice');

productQuantity.textContent = "Qty: " + quantity;
price.textContent = "Price :₹" + bookPrice;

function qtyIecrease() {
    if (quantity < 5) {
        quantity = quantity + 1;
    }
    productQuantity.textContent = "Qty: " + quantity;
}

function qtyDecrease() {
    if (quantity > 1) {
        quantity = quantity - 1;
    }
    productQuantity.textContent = "Qty: " + quantity;
}

function purchase() {

    let total = bookPrice * quantity
    totalPrice.textContent = "Product Price: ₹" + total

}

let firstname = document.querySelector('#Firstname');
let lastname = document.querySelector('#Lastname');
let phoneno = document.querySelector('#Phonenumber');
let form = document.querySelector('#form');
let displayerroressage = document.querySelector('.displayErrorMessage');
let displaygreetmessage = document.querySelector('.displayGreetMessage')

form.addEventListener('submit', (e) => {

    let messages = []

    if(firstname.value == ""){
        messages.push("First Name is required")
    }
    
    if(lastname.value == ""){
        messages.push("Last Name is required")
    }

    if(phoneno.value == ""){
        messages.push("Phone Number is required")
    }

    if(phoneno.value.length > 10){
        messages.push("Enter correct Phone Number")
    }
    
    if(messages.length > 0){

        e.preventDefault()

        displayerroressage.textContent = messages.join(" , ")
    }

})




