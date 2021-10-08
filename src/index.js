import './style.css';
import { initialLoad } from './initialLoad.js';
import { loadHomePage } from './homePage.js';
import { loadMenuPage } from './menuPage.js';
import { loadContactsPage } from './contactsPage.js';

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

    // function to clear page
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
    }

    switch (page) {
        case "Home":
            mainContainer.appendChild(loadHomePage());
            break;
        case "Menu":
            mainContainer.appendChild(loadMenuPage());
            break;

        case "Contacts":
            mainContainer.appendChild(loadContactsPage());
            break;
    
        default:
            break;
    }
}
