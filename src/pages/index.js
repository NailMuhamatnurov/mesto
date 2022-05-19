import '../pages/index.css';

import {profileEdit, placeAdd, formElementAdd, selectorObj, buttonEdit, buttonAdd,
        profileName, profileDescription, nameInput, jobInput, cardName,
        cardLink, objectSelector, container, template, initialCards} from '../utils/constants.js';

import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

function openPhotoPopup(photoTitle, photoLink) {
    popupWithImage.open(photoTitle, photoLink);
}

function handlePopupProfile(data) {
    userInfo.setUserInfo(data);
    popupEditProfile.close();
}

function handleTextInput() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
}

function addNewPhoto() {
    const cardItem = [];
    cardItem.name = cardName.value;
    cardItem.link = cardLink.value;
        
    renderCard(createCard(cardItem, template));
    formElementAdd.reset();
    popupAddCard.close();
}

function createCard(item, template) { 
    const card = new Card({data: item, openPhotoPopup}, template);
    const cardElement = card.generateCard();
     
    return cardElement;
}

function renderCard(card) {
    container.prepend(card);
}

buttonEdit.addEventListener('click', () => {
    popupEditProfile.open();
    handleTextInput();
});

buttonAdd.addEventListener('click', () => {
    popupAddCard.open();
});

const cardList = new Section({
    items: initialCards,
    renderer: (item) => {
        const cardElement = createCard(item, template);
        cardList.addItem(cardElement);
    },
  },
  selectorObj.elementsSelector
);

const popupWithImage = new PopupWithImage(selectorObj.popupImageSelector);
popupWithImage.setEventListeners();

const popupAddCard = new PopupWithForm(selectorObj.popupAddCardSelector, addNewPhoto);
popupAddCard.setEventListeners();

const popupEditProfile = new PopupWithForm(selectorObj.popupProfileSelector, handlePopupProfile);
popupEditProfile.setEventListeners();

const formValidationAddCard = new FormValidator(objectSelector, placeAdd);
formValidationAddCard.enableValidation();

const formValidationProfileEdit = new FormValidator(objectSelector, profileEdit);
formValidationProfileEdit.enableValidation();

const userInfo = new UserInfo({
    selectorName: document.querySelector(selectorObj.profileNameSelector),
    selectorDescription: document.querySelector(selectorObj.profileDescriptionSelector),
});

cardList.renderItems();