//ModalHeader//
const authButton = document.getElementsByClassName("auth-button")[0];
const modalBackground = document.getElementsByClassName("modal-bg-js")[0];
const modal = document.getElementsByClassName("modal-js")[0];

authButton.addEventListener("click", function() {
  modal.classList.add("active_modal");
  modalBackground.classList.add("background_modal--active");
})


modalBackground.addEventListener("click", function() {
  modalBackground.classList.remove("background_modal--active");
  modal.classList.remove("active_modal");
})

//InputModal//

document.querySelector('.modal__button').onclick = myClick;
const inputExit = document.getElementsByClassName('input__exit')[0];
 
function myClick(){
document.getElementsByClassName("input__exit")
const infoInput = document.querySelector('.i-1').value;
  
  document.getElementsByClassName('info-input')[0].value = infoInput;
  modal.classList.remove("active_modal");
  modalBackground.classList.remove("background_modal--active");
  sessionStorage.setItem('login', infoInput);
  

  inputExit.classList.add('input__exit--active');
  authButton.classList.add('auth-button--disabled');
}