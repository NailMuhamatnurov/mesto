export default class FormValidator {
    constructor(objectSelector, formElement) {
        this._objectSelector = objectSelector;
        this._formElement = formElement;
    }
    
    _checkInputValidity(inputElement) {
        if(!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        }
        else {
            this._hideInputError(inputElement);
        }
    }

    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

    _toggleButtonState(inputList, buttonElement) {
        if (this._hasInvalidInput(inputList)) {
            buttonElement.classList.add(this._objectSelector.inactiveButtonClass);
            buttonElement.setAttribute('disabled', true);
         
        } 
        else {
            buttonElement.classList.remove(this._objectSelector.inactiveButtonClass);
            buttonElement.removeAttribute('disabled');
        }
    } 
    
    _showInputError(inputElement, errorMessage) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._objectSelector.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._objectSelector.errorClass);
    }

    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._objectSelector.inputErrorClass);
        errorElement.classList.remove(this._objectSelector.errorClass);
        errorElement.textContent = '';
    }

    _setEventListeners() {
        const inputList = Array.from(this._formElement.querySelectorAll(this._objectSelector.inputSelector));
        const buttonElement = this._formElement.querySelector(this._objectSelector.submitButtonSelector);

        this._toggleButtonState(inputList, buttonElement);
    
        inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            this._checkInputValidity(inputElement);
            this._toggleButtonState(inputList, buttonElement);
        });
    });
    }
  
    enableValidation() { 
        this._setEventListeners();
    }
}