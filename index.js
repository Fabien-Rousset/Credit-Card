let myForm = document.querySelector("form");

let cardHolder = document.getElementById("cardholder");
let cardNumber = document.getElementById("card-number");
let expDate = document.getElementById("month");
let month = document.getElementById("year");
let cvc = document.getElementById("cvc");

let myError = document.getElementsByClassName('error')
let myRegex = /^(?:4[0-9]{3}(?:[ ]?[0-9]{4}){3}|5[1-5][0-9]{2}(?:[ ]?[0-9]{4}){3}|6(?:011|5[0-9]{2})(?:[ ]?[0-9]{4}){3}|3[47][0-9]{2}(?:[ ]?[0-9]{4}){3}|3(?:0[0-5]|[68][0-9])[0-9](?:[ ]?[0-9]{4}){2}|(?:2131|1800|35\d{2})\d{3}(?:[ ]?[0-9]{4}){2})$/;

let myRegexMonth = /^[0-9]{2}$/


myForm.addEventListener('submit', function(e){
    e.preventDefault();

if(cardHolder.value == ""){
    myError[0].innerHTML = "Cannot be empty";
    cardHolder.style.borderColor = "#FF7979";
    
} else{
    cardHolder.style.borderColor = "#117909";
};


if (myRegex.test(cardNumber.value)) {
	cardNumber.style.borderBlockColor = "#117909";
} else {
	myError[1].innerHTML = "Wrong format, number only";
    cardNumber.style.borderColor = "#FF7979";
};

if (myRegexMonth.test(expDate.value)){
    cardNumber.style.borderBlockColor = "#117909";
}
    else{
    myError[2].innerHTML = "Can't be blank";
    cardNumber.style.borderBlockColor = "#117909";

    }
}



)






