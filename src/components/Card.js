export default class Card {
    constructor({data, openPhotoPopup, handleLikeClick, handleBasketClick}, cardSelector, userId) {
        this._cardSelector = cardSelector;
        this._cardText = data.name;
        this._cardUrl = data.link;
        this._userId = userId;
        this._cardId = data._id;
        this._likes = data.likes;
        this._isOwner = data.owner._id; 
        this._openPhotoPopup = openPhotoPopup;
        this._handleLikeClick = handleLikeClick;
        this._handleBasketClick = handleBasketClick;
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
        
        if(this._userId !== this._isOwner) {
            this._remove.remove();
        }

        this.toggleLike(this._likes);
        this._setEventListeners();
      
        return this._element;
    }

    removeCard() {
        this._element.remove();
    }

    _isLike() {
        return this._likes.some((like) => {
            return like._id === this._userId;
        })
    }

    toggleLike(arr) {
        this._element.querySelector('.element__like-sum').textContent = arr.length;
        this._likes = arr;
        if(this._isLike()) {
            this._like.classList.add('element__like_active');
        }
        else {
            this._like.classList.remove('element__like_active');
        }
    }

    _setEventListeners() {
        this._image.addEventListener('click', () =>{
            this._openPhotoPopup(this._cardText, this._cardUrl);
        })

        this._remove.addEventListener('click', () => {
            this._handleBasketClick(this._cardId, this);
        })

        this._like.addEventListener('click', () => {
          this._handleLikeClick(this._cardId, this._isLike(), this);
        })
        }
    }