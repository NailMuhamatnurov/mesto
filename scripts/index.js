//popups
const editProfile = document.querySelector('.popup_type_edit');
const addPlace = document.querySelector('.popup_type_add');
const photoPopup = document.querySelector('.popup_type_photo');

//buttons
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closeButtonEdit = editProfile.querySelector('.popup__close');
const closeButtonAdd = addPlace.querySelector('.popup__close');
const closeButtonPhotoPopup = photoPopup.querySelector('.popup__close');

//profile titles
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

//input fields
const nameInput = document.getElementById('name');
const jobInput = document.getElementById('description');
const cardName = document.getElementById('place');
const cardLink = document.getElementById('image-link');

//forms
const formElementEdit = editProfile.querySelector('.popup__form');
const formElementAdd = addPlace.querySelector('.popup__form');

//template
const elementsContainer = document.querySelector('.elements');
const elementTitle = editProfile.querySelector('.element__title');
const addTemplate = document.querySelector('#elements-template').content;

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


//open popups
function openEditPopup() {
    let nameProfile = profileName.textContent;
    let descriptionProfile = profileDescription.textContent;
    nameInput.value = nameProfile;
    jobInput.value = descriptionProfile;
    editProfile.classList.add('popup_opened');
}

function openAddPopup() {
    addPlace.classList.add('popup_opened');
}

function openPhotoPopup(photoLink, phototitle) {
    photoPopup.classList.add('popup_opened', 'popup_opened_dark-opacity');
    popupPhotoLink.src = photoLink;
    popupPhotoTitle.textContent = phototitle;
}

//close popups
function closePopupEdit() {
    editProfile.classList.remove('popup_opened');
}

function closePopupAdd() {
   addPlace.classList.remove('popup_opened');
}

function closePhotoPopup() {
    console.log('popup closed');
    photoPopup.classList.remove('popup_opened');
}

//functions submit
function formSubmitHandler(evt) {
    evt.preventDefault();

    let nameField = nameInput.value;
    let jobField = jobInput.value;

    profileName.textContent = nameField;
    profileDescription.textContent = jobField;

    closePopupEdit();
}

function formSubmitHandlerAdd(evt) {
    evt.preventDefault();

    let titleCard = cardName.value;
    let imageCard = cardLink.value;

    const cardElement = addTemplate.querySelector('.element').cloneNode(true);

    cardElement.querySelector('.element__title').textContent = titleCard;
    cardElement.querySelector('.element__image').src = imageCard;

    cardElement.querySelector('.element__like').addEventListener('click', function(evt){
        evt.target.classList.toggle('element__like_active');
    });

    cardElement.querySelector('.element__image').addEventListener('click', function(evt) {
        openPhotoPopup(imageCard, titleCard);
    })

    cardElement.querySelector('.element__basket').addEventListener('click', function(evt) {
        cardElement.remove();
    })

    elementsContainer.prepend(cardElement);

    closePopupAdd();
}

// add default cards on page
function defaultCardsOnPage() {
    initialCards.forEach(function (item) {
        const cardElement = addTemplate.querySelector('.element').cloneNode(true);
        cardElement.querySelector('.element__title').textContent = item.name;
        cardElement.querySelector('.element__image').src = item.link;
        
        cardElement.querySelector('.element__like').addEventListener('click', function(evt){
            evt.target.classList.toggle('element__like_active');
        });

        cardElement.querySelector('.element__basket').addEventListener('click', function(evt) {
            cardElement.remove();
        })

        cardElement.querySelector('.element__image').addEventListener('click', function(evt) {
            openPhotoPopup(item.link, item.name);
        })

        elementsContainer.append(cardElement);
    });
}

//like active function
function likeActive() {
    console.log('like pressed');
    likeButton.classList.add('element__like_active');
}

defaultCardsOnPage();

//click listeners
editButton.addEventListener('click', openEditPopup);
addButton.addEventListener('click', openAddPopup);

closeButtonEdit.addEventListener('click', closePopupEdit);
closeButtonAdd.addEventListener('click', closePopupAdd);
closeButtonPhotoPopup.addEventListener('click', closePhotoPopup);

formElementEdit.addEventListener('submit', formSubmitHandler);
formElementAdd.addEventListener('submit', formSubmitHandlerAdd);