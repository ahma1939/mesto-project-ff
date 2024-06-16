

// Profile
const popupEditProfile = document.querySelector('.popup_type_edit');
const buttonEditProfile = document.querySelector('.profile__edit-button');
const nameInput = document.querySelector('.popup__input_type_name');
const descriptionInput = document.querySelector('.popup__input_type_description');
const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const submitEditProfilePopup = document.querySelector('.popup__form[name="edit-profile"]');

// Add Card
const popupAddCard = document.querySelector('.popup_type_new-card');
const buttonAddCard = document.querySelector('.profile__add-button');

// Close Button
const popupEditProfileCloseButton = popupEditProfile.querySelector('.popup__close');
const popupAddCardCloseButton = popupAddCard.querySelector('.popup__close');
const buttonClosePopup = popupEditProfile.querySelector('.popup__close');

// Open Popup
const openPopup = (popup) => {
    popup.classList.add('popup_is-opened');
};

// Close Popup
const closePopup = (popup) => {
    popup.classList.remove('popup_is-opened');
};

popupEditProfileCloseButton.addEventListener('click', () => {
    closePopup(popupEditProfile);
});

popupAddCardCloseButton.addEventListener('click', () => {
    closePopup(popupAddCard);
});

buttonAddCard.addEventListener('click', function () {
    openPopup(popupAddCard);
});

// Function Edit Profile
buttonEditProfile.addEventListener('click', function () {
    nameInput.value = profileName.textContent;
    descriptionInput.value = profileDescription.textContent;
    openPopup(popupEditProfile);
});

buttonClosePopup.addEventListener('click', function () {
    closePopup(popupEditProfile);
});

function handleProfileFormSubmit(event) {
    event.preventDefault();

    profileName.textContent = nameInput.value;
    profileDescription.textContent = descriptionInput.value;

    closePopup(popupEditProfile);
}

submitEditProfilePopup.addEventListener('submit', handleProfileFormSubmit);
