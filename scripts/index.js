//Profile
const popupEditProfile = document.querySelector('.popup_edit-profile');
const buttonEditProfile = document.querySelector('.profile__edit-button');
const nameInput = document.querySelector('.popup__input_type_name');
const descriptionInput = document.querySelector('.popup__input_type_description');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const submitEditProfilePopup = document.querySelector('.popup__form');

//Add Card
const popupAddCard = document.querySelector('.popup_add-card');
const buttonAddCard = document.querySelector('.profile__add-button');

//Close Button
const popupEditProfilCloseButton = popupEditProfile.querySelector('.popup__close-button');
const popupAddCardCloseButton = popupAddCard.querySelector('.popup__close-button');
const buttonClosePopup = popupEditProfile.querySelector('.popup__close-button');

//Open Popup
const openPopup = (popup) => {
    popup.classList.add('popup_opened');
};

//Close Popup
const closePopup = (popup) => {
    popup.classList.remove('popup_opened');
};

popupEditProfilCloseButton.addEventListener('click', () => {
    closePopup(popupEditProfile);
});

popupAddCardCloseButton.addEventListener('click', () => {
    closePopup(popupAddCard);
});




buttonAddCard.addEventListener('click', function () {
    popupAddCard.classList.add('popup_opened');
});

//Fuction Edit Profile
buttonEditProfile.addEventListener('click', function () {
    nameInput.value = profileName.textContent;
    descriptionInput.value = profileDescription.textContent;
    openPopup(popupEditProfile);
});

buttonClosePopup.addEventListener('click', function () {
    closePopup(popupEditProfile);
});

function handleclick(event) {
    event.preventDefault();

    profileName.textContent = nameInput.value;
    profileDescription.textContent = descriptionInput.value;

    closePopup(popupEditProfile);
}

submitEditProfilePopup.addEventListener('submit', handleclick);
