import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupSelector = popupSelector;
        this._popupTitle = this._popupItem.querySelector('.popup__photo-title');
        this._popupPhotoLink = this._popupItem.querySelector('.popup__photo');
    }

    open(photoTitle, photoLink) {
        super.open();
        this._popupPhotoLink.src = photoLink;
        this._popupPhotoLink.alt = photoTitle;
        this._popupTitle.textContent = photoTitle;s
    }

}