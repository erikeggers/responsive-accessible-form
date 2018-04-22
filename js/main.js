const submit = document.querySelector('button');
const nameField = document.querySelector('#name');
const emailField = document.querySelector('#email');
const addressField = document.querySelector('#address');
const addressTwoField = document.querySelector('#addressTwo');
const cityField = document.querySelector('#city');
const stateField = document.querySelector('#state');
const zipField = document.querySelector('#zip');
const countryField = document.querySelector('#country');

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

        if (status.typeMismatch) {
            this.addError('Entry does not match type');
        }

        if (status.patternMismatch) {
            this.addError('Invalid Zip Code');
        }

        if (status.valueMissing) {
            this.addError('Field can not be blank');
        }

        return this.errors;
    }
}


submit.addEventListener("click", (event) => {
    event.preventDefault();

    //Name
    let validateName = new CheckValidity(nameField, "text");
    let nameErrorMessage = validateName.getMessages();
    nameField.nextSibling.remove();
    nameField.insertAdjacentHTML('afterend', '<p class="error">' + nameErrorMessage + '</p>'); 
    
    console.log(nameErrorMessage);
    

    //Email 
    let validateEmail = new CheckValidity(emailField, "email");
    let emailErrorMessage = validateEmail.getMessages();
    emailField.nextSibling.remove();
    emailField.insertAdjacentHTML('afterend', '<p class="error">' + emailErrorMessage + '</p>'); 
    console.log(emailErrorMessage);

    //Address
    let validateAddress = new CheckValidity(addressField, "text");
    let addressErrorMessage = validateAddress.getMessages();
    addressField.nextSibling.remove();
    addressField.insertAdjacentHTML('afterend', '<p class="error">' + addressErrorMessage + '</p>'); 
    console.log(addressErrorMessage);

    //City 
    let validateCity = new CheckValidity(cityField, "text");
    let cityErrorMessage = validateCity.getMessages();
    cityField.nextSibling.remove();
    cityField.insertAdjacentHTML('afterend', '<p class="error">' + cityErrorMessage + '</p>'); 
    console.log(cityErrorMessage);

    //State
    let validateState = new CheckValidity(stateField, "text");
    let stateErrorMessage = validateState.getMessages();
    stateField.nextSibling.remove();
    stateField.insertAdjacentHTML('afterend', '<p class="error">' + stateErrorMessage + '</p>'); 
    console.log(stateErrorMessage);

    //Zip
    let validateZip = new CheckValidity(zipField, "text");
    let zipErrorMessage = validateZip.getMessages();
    zipField.nextSibling.remove();
    zipField.insertAdjacentHTML('afterend', '<p class="error">' + zipErrorMessage + '</p>');
    console.log(zipErrorMessage);

    //Country
    let validateCountry = new CheckValidity(countryField, "text");
    let countryErrorMessage = validateCountry.getMessages();
    countryField.nextSibling.remove();
    countryField.insertAdjacentHTML('afterend', '<p class="error">' + countryErrorMessage + '</p>');
    console.log(countryErrorMessage);
})