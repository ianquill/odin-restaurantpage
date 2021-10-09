function initialLoad() {
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

function loadFooter() {
    const footer = document.createElement('footer');
    const footerText = document.createElement('p');
    const footerLink = document.createElement('a');

    footerText.classList.add('footer-text');
    footerText.textContent = "© Ian Quill | Created as part of the Odin Project Curriculum | 2021";
    footerLink.classList.add('footer-text');
    footerLink.classList.add('link');
    footerLink.textContent = `@ianquill`;
    footerLink.href = `https://github.com/ianquill`;

    footer.append(footerText, footerLink);

    return footer;
}

export { initialLoad, loadFooter };