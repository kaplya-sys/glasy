const clearButton = document.querySelector('.form-search__button');
const searchField = document.querySelector('.form-search__field');

clearButton.addEventListener('click', () => {
  searchField.value = ''
});
