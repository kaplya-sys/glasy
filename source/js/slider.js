const prevSliderButton = document.querySelector('.slider__button--prev');
const nextSliderButton = document.querySelector('.slider__button--next');
const sliderItems = document.querySelectorAll('.elements-list__item');
const pageBody = document.querySelector('.page-body');
const paginationButtons = document.querySelectorAll('.slier-pagination__button');

let counter = 1;

const showSlider = (position) => {
  const fragment =  /--theme-[^]/;

  if (position > sliderItems.length) {
    counter = 1
  }

  if (position < 1) {
    counter = sliderItems.length
  }

  sliderItems.forEach(element => element.classList.remove('elements-list__item--current'));
  paginationButtons.forEach(element => element.classList.remove('slier-pagination__button--active'));
  sliderItems[counter - 1].classList.add('elements-list__item--current');
  paginationButtons[counter - 1].classList.add('slier-pagination__button--active');
  pageBody.setAttribute('class', 'page-body page-body--theme-1'.replace(fragment, `--theme-${counter}`));
};

const nextSlider = () => {
  showSlider(counter += 1);
};

const prevSlider = () => {
  showSlider(counter -= 1);
};

prevSliderButton.addEventListener('click', () => {
  prevSlider();
});

nextSliderButton.addEventListener('click', () => {
  nextSlider();
});

for (let i = 0; i < paginationButtons.length; i++) {
  paginationButtons[i].addEventListener('click', () => {
    i >= counter? nextSlider(): prevSlider()
  });
}