import Popup from './Popup.js';
import {nameInput, jobInput} from '../utils/constants.js';

export default class PopupWithForm extends Popup{
    constructor(popupSelector, handleSubmit) {
        super(popupSelector);
        this._handleSubmit = handleSubmit;
        this._popupForm = this._popupItem.querySelector('.popup__form');
        this._button = this._popupForm.querySelector('.popup__submit-button');
        this._inputList = this._popupItem.querySelectorAll('.popup__input');
        this._textButton = this._button.textContent;
    }

    _getInputValues() {
        this._formValues = {};
        this._formValues.name = nameInput.value;
        this._formValues.description = jobInput.value;

        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmit(this._getInputValues());
        });
    }

    close() {
        super.close();
        this._popupForm.reset();
    }
}