const hamburguerBtn = document.querySelector('.hamburguer-btn');
const sideBar = document.querySelector('.side-bar');

hamburguerBtn.addEventListener('click', sidebarToggle);
function sidebarToggle() {
    sideBar.classList.toggle('active');
}

//script para los modos noche y dia Toggle
const modeSwitcher = document.querySelector('.mode-switch i');
const body = document.querySelector('body');
modeSwitcher.addEventListener('click', modeSwitch);

function modeSwitch() {
    body.classList.toggle('active');
}