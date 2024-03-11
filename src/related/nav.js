const list = document.querySelector('.list');
const nav = document.querySelector('.navbar');
const closeNav = document.querySelector('.navhader');
function navCreate() {
  list.addEventListener('click', () => {
    nav.classList.add('clicked');
    nav.classList.remove('un-clicked');
  });
  closeNav.addEventListener('click', () => {
    nav.classList.remove('clicked');
    nav.classList.add('un-clicked');
  });
}

export { navCreate };
