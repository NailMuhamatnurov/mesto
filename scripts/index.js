//popups
const profileEdit = document.querySelector('.popup_type_edit');
const placeAdd = document.querySelector('.popup_type_add');
const photoPopup = document.querySelector('.popup_type_photo');

//buttons
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const buttonEditClose = profileEdit.querySelector('.popup__close');
const buttonAddClose = placeAdd.querySelector('.popup__close');
const buttonPhotoPopupClose = photoPopup.querySelector('.popup__close');

//profile titles
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

//input fields
const nameInput = document.getElementById('name');
const jobInput = document.getElementById('description');
const cardName = document.getElementById('place');
const cardLink = document.getElementById('image-link');

//forms
const formElementEdit = profileEdit.querySelector('.popup__form');
const formElementAdd = placeAdd.querySelector('.popup__form');

//template
const elementsContainer = document.querySelector('.elements');
const elementTitle = profileEdit.querySelector('.element__title');
const templateAdd = document.querySelector('#elements-template').content;

//popup data
const popupPhotoLink = photoPopup.querySelector('.popup__photo'); 
const popupPhotoTitle = photoPopup.querySelector('.popup__photo-title');

//first open page data
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

//open popup 
function openPopup(popup, photoLink = null, photoTitle = null) {
    popup.classList.add('popup_opened');
    
    popupPhotoLink.src = photoLink;
    popupPhotoLink.alt = photoTitle;
    popupPhotoTitle.textContent = photoTitle;

    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;

    cardName.value = null;
    cardLink.value = null;
}

//close popup
function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

//functions submit
function formSubmitHandler(evt) {
    evt.preventDefault();

    const nameField = nameInput.value;
    const jobField = jobInput.value;

    profileName.textContent = nameField;
    profileDescription.textContent = jobField;

    closePopup(profileEdit);
}

function formSubmitHandlerAdd(evt) {
    evt.preventDefault();

    renderCard(cardName.value, cardLink.value);

    closePopup(placeAdd);
}

function renderCard(title, image) {
    const card = createCard(title, image);
    
    elementsContainer.prepend(card);
   
    listeners(card, title, image);
}

function createCard(titleCard, imageCard) {
    const cardElement = templateAdd.querySelector('.element').cloneNode(true);

    cardElement.querySelector('.element__title').textContent = titleCard;
    cardElement.querySelector('.element__image').src = imageCard;
    cardElement.querySelector('.element__image').alt = titleCard;
    
    return cardElement;
}

function listeners(card, title, image) {
    card.querySelector('.element__like').addEventListener('click', function(evt){
        evt.target.classList.toggle('element__like_active');
    });

    card.querySelector('.element__image').addEventListener('click', function() {
        openPopup(photoPopup, image, title);
    });

    card.querySelector('.element__basket').addEventListener('click', function() {
        card.remove();
    });
}

// add default cards on page
function defaultCardsOnPage() {
    initialCards.forEach(function (item) {
    renderCard(item.name, item.link);
    });
}

//like active function
function likeActive() {
    likeButton.classList.add('element__like_active');
}

defaultCardsOnPage();

buttonEdit.addEventListener('click', () => {openPopup(profileEdit)});
buttonAdd.addEventListener('click', () => {openPopup(placeAdd)});

buttonEditClose.addEventListener('click', () => {closePopup(profileEdit)});
buttonAddClose.addEventListener('click', () => {closePopup(placeAdd)});
buttonPhotoPopupClose.addEventListener('click', () => {closePopup(photoPopup)});

formElementEdit.addEventListener('submit', formSubmitHandler);
formElementAdd.addEventListener('submit', formSubmitHandlerAdd);