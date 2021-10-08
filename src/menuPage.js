import { menu } from "./menu";

function loadMenuPage() {
    
    const content = document.createElement('div');
    const headline = document.createElement('h2');
    const gridContainer = document.createElement('div');
    
    content.classList.add('home-content');
    gridContainer.classList.add('menu-grid');
    headline.textContent = "MENU";
    
    // for each item in menu, build a card for it on the grid,
    // with an image 
    
    menu.forEach(element => {
        const card = document.createElement('div');
        const title = document.createElement('h3');
        const description = document.createElement('p');
        const image = element.img;
        
        card.classList.add('menu-card');
        title.classList.add('menu-title');
        description.classList.add('menu-description');
        image.classList.add('menu-image');
        
        title.textContent = element.title;
        description.textContent = element.description;
        
        card.append(title, description, image);
        gridContainer.appendChild(card);
    });
    
    content.appendChild(headline);
    content.appendChild(gridContainer);
    
    console.log("loaded menu page");
    return content;
}

export { loadMenuPage };