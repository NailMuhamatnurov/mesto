export default class FormValidator {
    constructor(objectSelector, formElement) {
        this._objectSelector = objectSelector;
        this._formElement = formElement;
        this._errorClass = objectSelector.errorClass;
        this._inputErrorClass = objectSelector.inputErrorClass
        this._inactiveButtonClass = objectSelector.inactiveButtonClass;
        this._buttonElement = formElement.querySelector(objectSelector.submitButtonSelector);
        this._inputList = Array.from(formElement.querySelectorAll(objectSelector.inputSelector));
    }
    
    _checkInputValidity(inputElement) {
        if(!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        }
        else {
            this._hideInputError(inputElement);
        }
    }

    _hasInvalidInput() { 
        return this._inputList.some((inputElement) => {
        
            return !inputElement.validity.valid;
        });
    }

    _toggleButtonState() {
        if (this._hasInvalidInput()) { 
            this._buttonElement.classList.add(this._inactiveButtonClass);
            this._buttonElement.setAttribute('disabled', true);
         
        } 
        else {
            this._buttonElement.classList.remove(this._inactiveButtonClass);
            this._buttonElement.removeAttribute('disabled');
        }
    } 
    
    _showInputError(inputElement, errorMessage) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    }

    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    }

    _setEventListeners() {
        this._toggleButtonState();
    
        this._inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            this._checkInputValidity(inputElement);
            this._toggleButtonState();
        });
    });
    }
  
    resetValidationState() {
        this._toggleButtonState();
    }

    enableValidation() { 
        this._setEventListeners();
    }
}