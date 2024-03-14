const loginButton = document.getElementById('login-button'),
    loginCloseBtn = document.getElementById('login-close-button'),
    loginWindow = document.getElementById('login-window');

loginButton.addEventListener('click', () => {
    loginWindow.classList.add('show-login');
});
loginCloseBtn.addEventListener('click', () => {
    loginWindow.classList.remove('show-login');
});
