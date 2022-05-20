import '../pages/index.css';

import {profileEdit, placeAdd, formElementAdd, selectorObj, buttonEdit, buttonAdd,
        profileName, profileDescription, nameInput, jobInput,
        objectSelector, template, initialCards} from '../utils/constants.js';

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
    const info = userInfo.getUserInfo();
    nameInput.value = info.name;
    jobInput.value = info.description;
}

function addNewPhoto(formData) {
    const newCard = createCard(formData, template);
    cardList.addItem(newCard);
    
    formElementAdd.reset();
    popupAddCard.close();
}

function createCard(item, template) { 
    const card = new Card({data: item, openPhotoPopup}, template);
    const cardElement = card.generateCard();
     
    return cardElement;
}

buttonEdit.addEventListener('click', () => {
    popupEditProfile.open();
    handleTextInput();
    formValidationProfileEdit.resetValidationState();
});

buttonAdd.addEventListener('click', () => {
    popupAddCard.open();
    formValidationAddCard.resetValidationState();
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
    selectorName: profileName,
    selectorDescription: profileDescription, 
});

cardList.renderItems();