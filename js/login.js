function checkLogin() {
    if (sessionStorage.getItem('login')) {
      document.getElementsByClassName('info-input')[0].value = sessionStorage.getItem('login');
      inputExit.classList.add('input__exit--active');
      authButton.classList.add('auth-button--disabled');
    }
  }
  
  checkLogin();
  
  const btnExit = document.getElementsByClassName('button-exit')[0];
  
  btnExit.addEventListener("click" , function(e) {
    e.preventDefault();
    sessionStorage.removeItem('login');
    inputExit.classList.remove('input__exit--active');
    authButton.classList.remove('auth-button--disabled');
    
  
  
  })