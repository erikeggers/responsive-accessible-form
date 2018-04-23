const submit = document.querySelector('button');
const input = document.querySelector('input');
const nameField = document.querySelector('#name');
const shirtSizeField = document.getElementsByName('shirtSize')[2];
const shirtColorField = document.getElementsByName('shirtColor')[3];
const shirtSizeContainer = document.querySelector('#shirtSizeContainer');
const shirtColorContainer = document.querySelector('#shirtColorContainer');
const sizeRadios = document.getElementsByName("shirtSize");
const colorRadios = document.getElementsByName("shirtColor");
const emailField = document.querySelector('#email');
const addressField = document.querySelector('#address');
const addressTwoField = document.querySelector('#addressTwo');
const cityField = document.querySelector('#city');
const stateField = document.querySelector('#state');
const zipField = document.querySelector('#zip');
const countryField = document.querySelector('#country');
const liveInfo = document.querySelector('#liveAddressInfo');

class CheckValidity {
    constructor(input, type) {
        this.input = input;
        this.type = type;
        this.errors = [];
    }

    addError(message) {
        this.errors.push(message);
    }

    getMessages() {
        const status = this.input.validity;

        if (status.valueMissing) {
            this.addError('Field can not be blank');
        }

        if (status.typeMismatch) {
            this.addError('Entry does not match type');
        }

        if (status.patternMismatch) {
            this.addError('Invalid Zip Code');
        }

        return this.errors;
    }
}

const addErrorToElement = (msg, field) => {
    if (field.nextSibling) {
        field.nextSibling.remove();
    }

    if (msg != '') {
        let describedby;

        if (field.getAttribute("class")) {
            describedby = field.getAttribute("class") + 'Error';
        } else if (field.getAttribute("id")){
            describedby = field.getAttribute("id") + 'Error';
        }

        field.setAttribute('aria-describedby', describedby);
        field.insertAdjacentHTML('afterend', '<p class="error" id="' + describedby + '">' + msg + '</p>'); 

        field.removeAttribute("aria-invalid")
        field.setAttribute("aria-invalid", "true");

    } else {
        field.removeAttribute("aria-invalid")
        field.setAttribute("aria-invalid", "false");
    }
}

submit.addEventListener("click", (event) => {
    event.preventDefault();

    //Shirt Size
    let validateSize = new CheckValidity(shirtSizeField, "radio");
    let shirtSizeErrorMessage = validateSize.getMessages();
    addErrorToElement(shirtSizeErrorMessage, shirtSizeField);

    //Shirt Color
    let validateColor = new CheckValidity(shirtColorField, "radio");
    let shirtColorErrorMessage = validateColor.getMessages();
    addErrorToElement(shirtColorErrorMessage, shirtColorField);

    //Name
    let validateName = new CheckValidity(nameField, "text");
    let nameErrorMessage = validateName.getMessages();
    addErrorToElement(nameErrorMessage, nameField);

    //Email 
    let validateEmail = new CheckValidity(emailField, "email");
    let emailErrorMessage = validateEmail.getMessages();
    addErrorToElement(emailErrorMessage, emailField);

    //Address
    let validateAddress = new CheckValidity(addressField, "text");
    let addressErrorMessage = validateAddress.getMessages();
    addErrorToElement(addressErrorMessage, addressField);

    //City 
    let validateCity = new CheckValidity(cityField, "text");
    let cityErrorMessage = validateCity.getMessages();
    addErrorToElement(cityErrorMessage, cityField);

    //State
    let validateState = new CheckValidity(stateField, "text");
    let stateErrorMessage = validateState.getMessages();
    addErrorToElement(stateErrorMessage, stateField);

    //Zip
    let validateZip = new CheckValidity(zipField, "text");
    let zipErrorMessage = validateZip.getMessages();
    addErrorToElement(zipErrorMessage, zipField);

    //Country
    let validateCountry = new CheckValidity(countryField, "text");
    let countryErrorMessage = validateCountry.getMessages();
    addErrorToElement(countryErrorMessage, countryField);


    console.log(shirtSizeErrorMessage);

    if (shirtSizeErrorMessage.length == '' && shirtColorErrorMessage.length == '' && nameErrorMessage.length == '' && emailErrorMessage.length =='' && addressErrorMessage.length == '' && cityErrorMessage.length == '' && stateErrorMessage.length =='' && zipErrorMessage.length == '' && countryErrorMessage.length == '') {
        
        document.querySelector('.item').setAttribute("style", "display:none");
        document.querySelector('.shippingDetails').setAttribute("style", "display:none");
        document.querySelector('.summary').setAttribute("style", "background:white");
        document.querySelector('button').setAttribute("style", "display:none");
        document.querySelector('.summaryList').insertAdjacentHTML('beforebegin', '<h2>Order Completed</h2>');
        document.querySelector('.summary').insertAdjacentHTML('beforeend', '<img src="images/circle-check.svg" class="blueCheck" alt="Blue Check Mark With Circle Around It">');
    }
    
});

//Add shipping info
nameField.addEventListener("keyup", (event) => { 
    document.querySelector('.liveName').innerText = nameField.value;
});

emailField.addEventListener("keyup", (event) => { 
    document.querySelector('.liveEmail').innerText = emailField.value;
});

addressField.addEventListener("keyup", (event) => { 
    document.querySelector('.liveAddress').innerText = addressField.value;
});

addressTwoField.addEventListener("keyup", (event) => { 
    document.querySelector('.liveAddressTwo').innerText = addressTwoField.value;
});

cityField.addEventListener("keyup", (event) => { 
    document.querySelector('.liveCity').innerText = cityField.value;
});

stateField.addEventListener("keyup", (event) => { 
    document.querySelector('.liveState').innerText = stateField.value;
});

zipField.addEventListener("keyup", (event) => { 
    document.querySelector('.liveZip').innerText = zipField.value;
});

countryField.addEventListener("change", (event) => { 
    document.querySelector('.liveCountry').innerText = countryField.value;
});

//Get radio value
const getRadios = (radios, elm) => {
    for (let i = 0; i < radios.length; i++) {       
        if (radios[i].checked) {
            console.log(radios[i].value);
            elm.innerText = radios[i].value;
            break;
        }
    }
}

const selectedSize = document.querySelector(".selectedSize");
//const selectedSize = document.querySelector('#email');

shirtSizeContainer.addEventListener("click", (event) => {
    getRadios(sizeRadios, selectedSize);
});

shirtColorContainer.addEventListener("click", (event) => {
    const selectedColor = document.querySelector(".selectedColor");
    getRadios(colorRadios, selectedColor);
});