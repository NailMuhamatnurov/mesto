export default class Card {
    constructor({data, openPhotoPopup}, cardSelector) {
        this._cardSelector = cardSelector;
        this._cardText = data.name;
        this._cardUrl = data.link;
        this._openPhotoPopup = openPhotoPopup;
    }

    _getTemplate(_cardText, _cardUrl) {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);

        return cardElement;    
    }

    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.element__title').textContent = this._cardText;
        this._image = this._element.querySelector('.element__image');
        this._image.src = this._cardUrl;
        this._image.alt = this._cardText
        this._like = this._element.querySelector('.element__like');
        this._remove = this._element.querySelector('.element__basket');
        
        this._setEventListeners();
      
        return this._element;
    }

    removeCard() {
        this._element.remove();
    }

    toggleLike() {
        this._like.classList.toggle('element__like_active');
    }

    _setEventListeners() {
        this._image.addEventListener('click', () =>{
            this._openPhotoPopup(this._cardText, this._cardUrl);
        })

        this._remove.addEventListener('click', () => {
            this.removeCard();
        })

        this._like.addEventListener('click', () => {
          this.toggleLike();
        })
        }
    }