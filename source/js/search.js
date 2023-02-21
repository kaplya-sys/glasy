const fieldClearButton = document.querySelector('.form-search__button');
const searchField = document.querySelector('.form-search__field');

fieldClearButton.addEventListener('click', () => {
  searchField.value = '';
});