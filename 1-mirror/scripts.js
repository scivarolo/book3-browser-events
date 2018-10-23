const article1 = document.querySelector('#article1')
const article2 = document.querySelector('#article2')
const inputEl = document.querySelector('#message');

inputEl.addEventListener('keyup', (event) => {
  article1.textContent = inputEl.value;
  article2.textContent = inputEl.value;
})