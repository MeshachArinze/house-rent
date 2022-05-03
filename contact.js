const getModal = document.querySelector('.modal');
const openModal = document.querySelector('.button');
const closeModal = document.querySelector('.modal-close');
openModal.addEventListener('click', function() {
    getModal.style.display = 'block';
});

closeModal.addEventListener('click', function() {
    getModal.style.display = 'none';
});





