import '../pages/index.css';

import {profileEdit, placeAdd, selectorObj, buttonEdit, buttonAdd, buttonAvatar,
        profileName, profileDescription, nameInput, jobInput, profileAvatar,
        objectSelector, template} from '../utils/constants.js';

import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import PopupWithSubmit from '../components/PopupWithSubmit.js';

function openPhotoPopup(photoTitle, photoLink) {
    popupWithImage.open(photoTitle, photoLink);
}

function handlePopupProfile(inputsData) {
    popupEditProfile.renderSaving(true);

    api.saveUserInfo(inputsData)
        .then((data) => {
            userInfo.setUserInfo(data);
            popupEditProfile.close();
        })
        .catch((err) => {
            console.log('При изменении профиля ошибка: ' + err);
        })
        .finally(() => {
            popupEditProfile.renderSaving(false);
        })
}

function handleTextInput() {
    const info = userInfo.getUserInfo();
    nameInput.value = info.name;
    jobInput.value = info.about;
}

function addNewPhoto(inputsData) {
    popupAddCard.renderSaving(true);
    
    api.addNewCard(inputsData)
        .then((data) => {
            cardList.addItem(createCard(data, data.owner._id));
            popupAddCard.close();
        }) 
        .catch((err) => {
            console.log('Ошибка при добавлении новой карточки: ' + err);
        })
        .finally(() => {
            popupAddCard.renderSaving(false);
        })
}

function handleLikeClick(id, isLike, card) {
        if(isLike){
        api.dislikeSumCard(id)
        .then((res) => {
            card.toggleLike(res.likes);
        })
        .catch((err) => {
            console.log('Ошибка снятия лайка: ' + err);
        });
    }
    else {
        api.likeSumCard(id)
        .then((res) => {
            card.toggleLike(res.likes);
        })
        .catch((err) => {
            console.log('Ошибка установки лайка: ' + err);
        });
    }
}

function handleBasketClick(id, card) {
    popupRemoveQuestion.submit(() => handleBasketSubmit(id, card))
    popupRemoveQuestion.open();
}

function handleBasketSubmit(id, card) {
    popupRemoveQuestion.renderSavingQuestion(true);
    
    api.removeCards(id)
        .then(() => {
            card.removeCard();
            popupRemoveQuestion.close();
        })
        .catch((err) => {
            console.log('Ошибка удаления карточки: ' + err);
        })
        .finally(() => {
            popupRemoveQuestion.renderSavingQuestion(false);
        })
}

function handlePopupAvatar(inputsData) {
    popupEditAvatar.renderSaving(true);

    api.changeAvatar(inputsData)
        .then((data) => {
            userInfo.setUserInfo(data);
            popupEditAvatar.close();
        })
        .catch((err) => {
            console.log('Ошибка в handlePopupAvatar: ' + err);
        })
        .finally(() => {
            popupEditAvatar.renderSaving(false);
        })
}

function createCard(dataCard, id) { 
    const card = new Card({
        data: dataCard, 
        openPhotoPopup, 
        handleLikeClick,
        handleBasketClick,
    }, template, id);
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

buttonAvatar.addEventListener('click', () => {
    popupEditAvatar.open();
});

const cardList = new Section({
    renderer: (cardItem, id) => {
        cardList.addItem(createCard(cardItem, id));
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

const popupEditAvatar = new PopupWithForm(selectorObj.popupProfileAvatar, handlePopupAvatar);
popupEditAvatar.setEventListeners();

const popupRemoveQuestion = new PopupWithSubmit(selectorObj.popupPhotoRemove);
popupRemoveQuestion.setEventListeners();

const formValidationAddCard = new FormValidator(objectSelector, placeAdd);
formValidationAddCard.enableValidation();

const formValidationProfileEdit = new FormValidator(objectSelector, profileEdit);
formValidationProfileEdit.enableValidation();

const userInfo = new UserInfo({
    nameElement: profileName,
    descriptionElement: profileDescription,
    avatarElement: profileAvatar,
});

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-42',
    headers: {
      authorization: 'e471957f-85d9-4bfd-be28-cfa537c03528',
      'Content-Type': 'application/json'
    }
  });

Promise.all([
    api.getUserData(),
    api.getInitialCards()
])
.then((values) => {
    userInfo.setUserInfo(values[0]);
    cardList.renderItems(values[1], values[0]._id);
})
.catch((err) => {
    console.log('Получили ошибку в catch Promise.All' + err);
});