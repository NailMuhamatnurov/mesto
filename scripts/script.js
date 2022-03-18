let content = document.querySelector('.content');
let editProfile = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let nameInput = document.querySelector('.popup__input_name');
let jobInput = document.querySelector('.popup__input_description');
let formElement = document.querySelector('.popup__submit-button');

function openPopup() {
    let nameProfile = profileName.textContent;
    let descriptionProfile = profileDescription.textContent;
    nameInput.value = nameProfile;
    jobInput.value = descriptionProfile;
    editProfile.classList.add('popup_opened');
}

function closePopup() {
    editProfile.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 

    let nameProfile = profileName.textContent;
    let descriptionProfile = profileDescription.textContent;

    let nameField = nameInput.value;
    let jobField = jobInput.value;   
   
    profileName.textContent = nameField;
    profileDescription.textContent = jobField;
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

formElement.addEventListener('submit', formSubmitHandler);