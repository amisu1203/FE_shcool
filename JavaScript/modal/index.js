const btnOpen = document.getElementById('btn-open');
const btnClose = document.getElementById('btn-close');
const contModal = document.querySelector('.cont-modal');

btnOpen.onclick = () => {
    contModal.style.display = 'flex';
};
btnClose.onclick = () => {
    contModal.style.display = 'none';
}