import {defaultCards, renderCard} from './Card.js';
import FormValidator from './FormValidator.js';

//popups
const profileEdit = document.querySelector('.popup_type_edit');
const placeAdd = document.querySelector('.popup_type_add');
const photoPopup = document.querySelector('.popup_type_photo');

//forms
const formElementEdit = profileEdit.querySelector('.popup__form');
const formElementAdd = placeAdd.querySelector('.popup__form');

//buttons
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const buttonEditClose = profileEdit.querySelector('.popup__close');
const buttonAddClose = placeAdd.querySelector('.popup__close');
const buttonPhotoPopupClose = photoPopup.querySelector('.popup__close');
const buttonSubmit = formElementAdd.querySelector('.popup__submit-button');

//profile titles
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

//input fields
const nameInput = document.getElementById('name');
const jobInput = document.getElementById('description');
const cardName = document.getElementById('place');
const cardLink = document.getElementById('image-link');

//popup data
const popupPhotoLink = photoPopup.querySelector('.popup__photo'); 
const popupPhotoTitle = photoPopup.querySelector('.popup__photo-title');

const objectSelector = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button', 
    inactiveButtonClass: 'popup__submit-button_inactive', 
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active' 
};

function openPopup(popup) {
    popup.classList.add('popup_opened');
    
    document.addEventListener('keydown', handleEsc);
    document.addEventListener('click', handleMouseClick);  
}

function openProfilePopup() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
    
    openPopup(profileEdit);
}

export function openPhotoPopup(photoTitle, photoLink) {
    popupPhotoLink.src = photoLink;
    popupPhotoLink.alt = photoTitle;
    popupPhotoTitle.textContent = photoTitle;

    openPopup(photoPopup);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    
    document.removeEventListener('keydown', handleEsc);
    document.removeEventListener('click', handleMouseClick);
}

function handleEsc(evt) {
    if (evt.key === 'Escape') {
        const popupOpened = document.querySelector('.popup_opened');
        closePopup(popupOpened);
    }
}

function handleMouseClick(evt) {
    if (evt.target.classList.contains('popup')) {
        const popupOpened = document.querySelector('.popup_opened');
        closePopup(popupOpened);
    }
}

function editProfileInfo(evt) {
    evt.preventDefault();

    const nameField = nameInput.value;
    const jobField = jobInput.value;

    profileName.textContent = nameField;
    profileDescription.textContent = jobField;

    closePopup(profileEdit);
}

function addNewPhoto(evt) {
    evt.preventDefault();

    renderCard(cardName.value, cardLink.value);

    formElementAdd.reset();
           
    buttonSubmit.classList.add('popup__submit-button_inactive');
    buttonSubmit.setAttribute('disabled', true);

    closePopup(placeAdd);
}

defaultCards();

buttonEdit.addEventListener('click', () => {openProfilePopup()});
buttonAdd.addEventListener('click', () => {openPopup(placeAdd)});

buttonEditClose.addEventListener('click', () => {closePopup(profileEdit)});
buttonAddClose.addEventListener('click', () => {closePopup(placeAdd)});
buttonPhotoPopupClose.addEventListener('click', () => {closePopup(photoPopup)});

formElementEdit.addEventListener('submit', editProfileInfo);
formElementAdd.addEventListener('submit', addNewPhoto);

const formValidationAddCard = new FormValidator(objectSelector, placeAdd);
formValidationAddCard.enableValidation();

const formValidationProfileEdit = new FormValidator(objectSelector, profileEdit);
formValidationProfileEdit.enableValidation();