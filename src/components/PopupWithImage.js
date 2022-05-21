import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupTitle = this._popupElement.querySelector('.popup__photo-title');
        this._popupPhotoLink = this._popupElement.querySelector('.popup__photo');
    }

    open(photoTitle, photoLink) {
        super.open();
        this._popupPhotoLink.src = photoLink;
        this._popupPhotoLink.alt = photoTitle;
        this._popupTitle.textContent = photoTitle;
    }
}