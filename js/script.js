// Déclaration des constantes

const keyboard = document.getElementById('keyboard');
const body = document.querySelector('body');

const nightModeOn = document.getElementById('btnNightMode');
const capsLockOn = document.getElementById('btnCapsLock');

// Code principal

function capsLockActive(){
    keyboard.classList.toggle('keyboardUppercase');
}

function nightModeActive(){
    body.classList.toggle('nightMode');
}

// Gestionnaire d'évènements
nightModeOn.addEventListener('click', nightModeActive);

capsLockOn.addEventListener('click', capsLockActive);
