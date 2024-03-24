import { updatingUi } from './updatingUi';

function navCreate() {
  const list = document.querySelector('.list');
  const nav = document.querySelector('.navbar');
  const closeNav = document.querySelector('.navhader');
  const button = document.querySelector('.search-button');
  const search = document.querySelector('.search-input');
  list.addEventListener('click', () => {
    nav.classList.add('clicked');
    nav.classList.remove('un-clicked');
  });
  closeNav.addEventListener('click', () => {
    nav.classList.remove('clicked');
    nav.classList.add('un-clicked');
  });
  button.addEventListener('click', () => {
    updatingUi(search.value);
  });
}

export { navCreate };
