// Déclaration des constantes

const body = document.querySelector('body');

const nightModeOn = document.getElementById('btnNightMode');
const capsLockOn = document.getElementById('btnCapsLock');

// Code principal

function capsLockActive(){
    body.classList.toggle('keyboardUppercase');
}

function nightModeActive(){
    body.classList.toggle('nightMode');
}



// Gestionnaire d'évènements
nightModeOn.addEventListener('click', nightModeActive);

capsLockOn.addEventListener('click', capsLockActive);