export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._popupItem = document.querySelector(this._popupSelector);
        this._popupCloseButton = this._popupItem.querySelector('.popup__close');
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open() {
        this._popupItem.classList.add('popup_opened');
    
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popupItem.classList.remove('popup_opened');
    
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    setEventListeners() {
        this._popupCloseButton.addEventListener('click', () => {this.close()});

        this._popupItem.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup')) {
            this.close();
            }
        });
    }

}