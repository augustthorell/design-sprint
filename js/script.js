let loginIcon = document.getElementById('login-icon');
let loginText = document.getElementById('login-text');
let modal = document.querySelector('.modal-wrapper');
let closeModalBtn = document.querySelector('.close-modal');
let cancelBtnModal = document.querySelector('.cancelbtn');


window.onscroll = function() {
    if(window.pageYOffset >= 500) {
        document.querySelector('.go-to-top').style.visibility="visible";
    }else {
        document.querySelector('.go-to-top').style.visibility="hidden";
    }
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


loginIcon.addEventListener('click', openModal);
loginText.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal)
cancelBtnModal.addEventListener('click', closeModal)

function openModal() {
    modal.style.display = 'block'
}
function closeModal() {
    modal.style.display = 'none'
}

