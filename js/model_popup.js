const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const openBtn = document.getElementById('openModal');
const closeBtn = document.getElementById('closeModal');
const cancelBtn = document.getElementById('cancelBtn');
function showModal() {
    modal.style.display = 'block'; 
    overlay.style.display = 'block';
}
function hideModal() {
    modal.style.display = 'none';
    overlay.style.display = 'none';
}
openBtn.addEventListener('click', showModal);
closeBtn.addEventListener('click', hideModal); 
cancelBtn.addEventListener('click', hideModal);
overlay.addEventListener('click', hideModal);
