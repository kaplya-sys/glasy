const clearButton = document.querySelector('.form-search__button');
const searchField = document.querySelector('.form-search__field');
const prevButton = document.querySelector('.slider__button--prev');
const nextButton = document.querySelector('.slider__button--next');
const sliders = document.querySelectorAll('.elements-list__item');
const bodyHeader = document.querySelector('.body__header');
const bodyMain = document.querySelector('.body__main');
const bodyFooter = document.querySelector('.body__footer');
const paginationButtons = document.querySelectorAll('.pagination-list__button');
const userNavButtons = document.querySelectorAll('.user-list__button');
const popovers = document.querySelectorAll('.popover');
const popoverBasket = document.querySelector('.popover--basket');
const popoverBasketText = document.querySelector('.popover__text');
const basketListCloseButton = document.querySelectorAll('.basket-list__close-button')
const contactsButton = document.querySelector('.contacts__button');
const modal = document.querySelector('.modal');
const feedbackCloseButton = document.querySelector('.feedback__close-button');

let counter = 1;

const hideEmptyBasket = (basketList) => {
  if (!basketList) {
    popoverBasketText.classList.add('popover__text--show');
    popoverBasket.classList.add('popover--basket--empty');
  }
};

const nextSlider = () => {
  showSlider(counter += 1);
};

const prevSlider = () => {
  showSlider(counter -= 1);
};

const showSlider = (position) => {
  const fragment =  /\theme--theme-[^ ]/;

  if (position > sliders.length) {
    counter = 1
  }

  if (position < 1) {
    counter = sliders.length
  }

  sliders.forEach(element => element.classList.remove('elements-list__item--current'));
  paginationButtons.forEach(element => element.classList.remove('pagination-list__button--current'));
  sliders[counter - 1].classList.add('elements-list__item--current');
  paginationButtons[counter - 1].classList.add('pagination-list__button--current');
  bodyHeader.setAttribute('class', 'body__header header theme--theme-1'.replace(/--theme-[^]/, `--theme-${counter}`));
  bodyMain.setAttribute('class', 'body__main main-index theme--theme-1'.replace(/--theme-[^]/, `--theme-${counter}`));
  bodyFooter.setAttribute('class', 'body__footer footer theme--theme-1'.replace(/--theme-[^]/, `--theme-${counter}`));
};

clearButton.addEventListener('click', () => {
  searchField.value = '';
});

prevButton.addEventListener('click', () => {
  prevSlider();
});

nextButton.addEventListener('click', () => {
  nextSlider();
});

contactsButton.addEventListener('click', () => {
  modal.classList.remove('modal--close');
});

feedbackCloseButton.addEventListener('click', () => {
  modal.classList.add('modal--close');
});

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.add('modal--close');
  }
});

for (let i = 0; i < userNavButtons.length; i++) {
  userNavButtons[i].addEventListener('click', () => {
    userNavButtons[i].classList.toggle('user-list__button--current');
  });
}
