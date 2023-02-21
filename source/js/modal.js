const modalWindow = document.querySelector('.modal');
const modalOpenButton = document.querySelector('.contacts__button');
const modalCloseButton = document.querySelector('.feedback__close-button');

const onCloseButtonClick = () => {
  hideModal();
};

const onWindowClick = (event) => {
  if (event.target === modalWindow) {
    hideModal();
  }
};

const onOpenButtonClick = (event) => {
  event.preventDefault();
  showModal();
};

function showModal () {
  modalWindow.classList.remove('modal--close');

  modalCloseButton.addEventListener('click', onCloseButtonClick);
};

function hideModal () {
  modalWindow.classList.add('modal--close');

  modalCloseButton.removeEventListener('click', onCloseButtonClick);
};

modalOpenButton.addEventListener('click', onOpenButtonClick);

modalWindow.addEventListener('click', onWindowClick);