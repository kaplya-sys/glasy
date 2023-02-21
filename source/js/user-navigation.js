const userListButtons = document.querySelectorAll('.user-list__button');
const userListPopovers = document.querySelectorAll('.user-list__popover');

for (let i = 0; i < userListButtons.length; i++) {
  userListButtons[i].addEventListener('click', () => {
    userListButtons[i].classList.toggle('user-list__button--current');
    userListPopovers[i].classList.toggle('popover--show');
  });
}
