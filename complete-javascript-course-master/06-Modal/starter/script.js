'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
//QuerySelector Only selects 1
//QuerySelectorAll selects all

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', OpenModal);

btCloseModal.addEventListener('click', CloseModal);
overlay.addEventListener('click', CloseModal);

function CloseModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
function OpenModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
//reading event of a key
document.addEventListener('keydown', function (e) {
  //console.log(e); //e is an object that has the keys
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    CloseModal();
  }
});
