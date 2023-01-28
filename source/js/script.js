const clearButton = document.querySelector('.form-search__button');
const searchField = document.querySelector('.form-search__field');
const prevButton = document.querySelector('.slider__button--prev');
const nextButton = document.querySelector('.slider__button--next');
const sliders = document.querySelectorAll('.elements-list__item');
const pageBody = document.querySelector('.page-body');
const paginationButtons = document.querySelectorAll('.slier-pagination__button');
const userNavButtons = document.querySelectorAll('.user-list__button');
const popover = document.querySelector('.popover');
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
  const fragment =  /--theme-[^]/;

  if (position > sliders.length) {
    counter = 1
  }

  if (position < 1) {
    counter = sliders.length
  }

  sliders.forEach(element => element.classList.remove('elements-list__item--current'));
  paginationButtons.forEach(element => element.classList.remove('slier-pagination__button--current'));
  sliders[counter - 1].classList.add('elements-list__item--current');
  paginationButtons[counter - 1].classList.add('slier-pagination__button--current');
  pageBody.setAttribute('class', 'page-body page-body--theme-1'.replace(fragment, `--theme-${counter}`));
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
  userNavButtons[i].addEventListener('click', (event) => {
    if (event.target !== popover) {
      userNavButtons.forEach(element => element.classList.remove('user-list__button--current'));
      userNavButtons[i].classList.toggle('user-list__button--current');
    }
  });
}
