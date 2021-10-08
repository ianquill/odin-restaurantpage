import Burger from './burger.jpg';

function loadHomePage() {
    const content = document.createElement('div');
    const headline = document.createElement('h2');
    const para = document.createElement('p');
    const image = new Image();

    content.classList.add('home-content');
    headline.textContent = "Congratulations. You've found Los Angeles' best-kept secret.";
    para.textContent = "We here at Clown Burger take pride in our 100% clown-based patties. Our restrooms are top-quality, and you'll find the food to be quite delicious too. Balloon animals are freshly made, never frozen. Open 24/7."
    image.src = Burger;

    content.append(headline, para, image);
    
    return content;
}

export {loadHomePage};
