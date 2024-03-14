const searchButton = document.getElementById('search-button'),
    searchCloseBtn = document.getElementById('search-close-button'),
    searchWindow = document.getElementById('search-window');

searchButton.addEventListener('click', () => {
    searchWindow.classList.add('show-search');
});
searchCloseBtn.addEventListener('click', () => {
    searchWindow.classList.remove('show-search');
});
