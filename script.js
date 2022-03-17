let content = document.querySelector('.content');
let editProfile = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close')

function openPopup() {
    editProfile.classList.add('popup_opened');
}

function closePopup() {
    editProfile.classList.remove('popup_opened');
}

editButton.addEventListener('click', openPopup);

closeButton.addEventListener('click', closePopup);