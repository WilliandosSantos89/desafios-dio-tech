function changeMode() {
    changeClasses();
}

function changeClasses() {
    button.classList.toggle('darkModeClass');
    h1.classList.toggle('darkModeClass');
    body.classList.toggle('darkModeClass');
    footer.classList.toggle('darkModeClass');
}

function changeText() {

    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";

    if(body.classList.contains('darkModeClass')) {
        body.innerHTML = lightMode;
        h1.innerHTML = darkMode + " ON"
    }
}

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];


button.addEventListener('click', changeMode);