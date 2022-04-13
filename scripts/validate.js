const showInputError = (objectSelector, formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(objectSelector.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(objectSelector.errorClass);
}

const hideInputError = (objectSelector, formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(objectSelector.inputErrorClass);
    errorElement.classList.remove(objectSelector.errorClass);
    errorElement.textContent = '';
}

const toggleButtonState = (objectSelector, inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(objectSelector.inactiveButtonClass);
        buttonElement.setAttribute('disabled', true);
     
    } 
    else {
        buttonElement.classList.remove(objectSelector.inactiveButtonClass);
        buttonElement.removeAttribute('disabled');
    }
  } 

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}

const checkInputValidity = (objectSelector, formElement, inputElement) => {
    if(!inputElement.validity.valid) {
        showInputError(objectSelector, formElement, inputElement, inputElement.validationMessage);
    }
    else {
        hideInputError(objectSelector, formElement, inputElement);
    }
}

const setEventListeners = (objectSelector, formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(objectSelector.inputSelector));
    const buttonElement = formElement.querySelector(objectSelector.submitButtonSelector);

    toggleButtonState(objectSelector, inputList, buttonElement);
   
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(objectSelector, formElement, inputElement);
            toggleButtonState(objectSelector, inputList, buttonElement);
        });
    });
}

const enableValidation = (objectSelector) => {
    const formList = Array.from(document.querySelectorAll(objectSelector.formSelector));
    formList.forEach((formElement) => {
        setEventListeners(objectSelector, formElement);
    });
}

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button', 
    inactiveButtonClass: 'popup__submit-button_inactive', 
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active' 
});