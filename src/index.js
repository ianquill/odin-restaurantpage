import './style.css';
import { initialLoad } from './initialLoad.js';
import { loadHomePage } from './homePage.js';
import { loadMenuPage } from './menuPage';
import { loadContactsPage } from './contactsPage';

// initialize DOM
const content = document.getElementById('content');
const mainContainer = document.createElement('div');
content.id = "content";
mainContainer.classList.add("main-container");

document.body.appendChild(content);

mainContainer.appendChild(loadHomePage());

content.appendChild(initialLoad());
content.appendChild(mainContainer);

const nav = document.querySelectorAll('.header-item');

for (let li of nav) {
    li.addEventListener('click', () => {
        const page = li.textContent;
        loadPage(page);
    })
};

function loadPage(page) {

    switch (page) {
        case "Home":
            loadHomePage();
            break;
        case "Menu":
            loadMenuPage();
            break;

        case "Contacts":
            loadContactsPage();
            break;
    
        default:
            break;
    }
}
