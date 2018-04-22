const submit = document.querySelector('button');
const nameField = document.querySelector('#name');
const shirtSizeField = document.getElementsByName('shirtSize')[2];
const shirtColorField = document.getElementsByName('shirtColor')[3];
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

function addErrorToElement(msg, field) {
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
    console.log(shirtSizeField)
    let validateSize = new CheckValidity(shirtSizeField, "radio");
    let shirtSizeErrorMessage = validateSize.getMessages();
    addErrorToElement(shirtSizeErrorMessage, shirtSizeField);

    //Shirt Color
    console.log(shirtColorField)
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
})