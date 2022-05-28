import Popup from './Popup.js';

export default class PopupWithSubmit extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._button = this._popupElement.querySelector('.popup__form');
        this._submitButton = this._button.querySelector('.popup__submit-button');
        this._textButton = this._submitButton.textContent;
    }

    submit(data) {
        this._handleSubmit = data;
    }

    renderSavingQuestion(status){
        if(status){
            this._submitButton.textContent = `Удаляем...`;
        } else {
            this._submitButton.textContent = this._textButton;
        }
    }

    setEventListeners() {
        super.setEventListeners();
        this._button.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._handleSubmit();
        });
    }
}