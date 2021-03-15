

//TabsIntro//



const tabsBtn = document.querySelectorAll(".tabs_btn");
const tabsItems = document.querySelectorAll(".tabs_content");


tabsBtn.forEach(function(item){
  item.addEventListener("click", function(){
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);

      tabsBtn.forEach(function(item) {
          item.classList.remove('active');
      })
      tabsItems.forEach(function(item) {
        item.classList.remove('active_content');

      currentBtn.classList.add('active');
      currentTab.classList.add('active_content');
    })
})
})

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

document.querySelector('.button_modal').onclick = myClick;
const inputExit = document.getElementsByClassName('input_exit')[0];
 
function myClick(){
  let buttonExit = document.getElementsByClassName("input_exit")
  let infoInput = document.querySelector('.i-1').value;
  console.log(infoInput)
  
  document.getElementsByClassName('info_input')[0].value = infoInput;
  modal.remove("modal-js");
  modalBackground.remove("modal-bg-js");
  sessionStorage.setItem('login', infoInput);
  

  inputExit.classList.add('input_exit--active');
  authButton.classList.add('auth-button--disabled');
}

function checkLogin() {
  if (sessionStorage.getItem('login')) {
    let loginElement = document.getElementsByClassName('info_input')[0].value = sessionStorage.getItem('login');
    inputExit.classList.add('input_exit--active');
    authButton.classList.add('auth-button--disabled');
  }
}

checkLogin();

const btnExit = document.getElementsByClassName('button_exit')[0];

  btnExit.addEventListener("click" , function() {
    inputExit.classList.remove('input_exit--active');
    authButton.classList.remove('auth-button--disabled');
  })
















