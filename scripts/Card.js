import {openPhotoPopup} from './index.js';

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
]; 

class Card {
    constructor(data, cardSelector) {
        this._cardSelector = cardSelector;
        this._cardText = data.name;
        this._cardUrl = data.link;
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

    _setEventListeners() {
        this._image.addEventListener('click', () =>{
            openPhotoPopup(this._cardText, this._cardUrl);
        })

        this._remove.addEventListener('click', () => {
            this._element.remove();
        })

        this._like.addEventListener('click', () => {
            this._like.classList.toggle('element__like_active');
        })
        }
    }

    const defaultCards = () => {
        initialCards.forEach((item) => {
        const card = new Card(item, '.elements-template');
        
        const cardElement = card.generateCard();
        
        document.querySelector('.elements').append(cardElement);
        });
    }

    const renderCard = (cardTitle, cardLink) => {
        const item = [];
        item.name = cardTitle;
        item.link = cardLink;
        const card = new Card(item, '.elements-template');
            
        const cardElement = card.generateCard();
            
        document.querySelector('.elements').prepend(cardElement);
    }

export {defaultCards, renderCard};