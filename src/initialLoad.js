function initialLoad() {
    const content = document.getElementById('content');

    // Header
    const header = document.createElement('header');
    const headerText = document.createElement('h1');
    const headerList = document.createElement('ul');
    const headerHome = document.createElement('l1');
    const headerMenu = document.createElement('li');
    const headerContact = document.createElement('li');

    headerText.classList.add('header-text');
    headerHome.classList.add('header-item');
    headerMenu.classList.add('header-item');
    headerContact.classList.add('header-item');

    headerText.textContent = "Clown Burger";
    headerHome.textContent = "Home";
    headerMenu.textContent = "Menu";
    headerContact.textContent = "Contacts";

    headerList.appendChild(headerHome);
    headerList.appendChild(headerMenu);
    headerList.appendChild(headerContact);
    header.appendChild(headerText);
    header.appendChild(headerList);
    
    return header;
}

export {initialLoad};