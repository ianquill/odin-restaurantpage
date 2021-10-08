function loadContactsPage() {
    console.log("loaded contacts page");

    const content = document.createElement('div');
    const headline = document.createElement('h2');
    const description = document.createElement('p');
    const form = document.createElement('form');
    const nameLabel = document.createElement('label');
    const nameInput = document.createElement('input');
    const emailLabel = document.createElement('label');
    const emailInput = document.createElement('input');
    const messageLabel = document.createElement('label');
    const messageInput = document.createElement('textarea');
    const submitButton = document.createElement('button');

    description.textContent = "We here at Clown Burger value each and every opinion of our customers (and clowns). Feel free to drop a line and get in touch with our head chef, CEO, or janitorial team!";
    content.classList.add('home-content');
    headline.textContent = "CONTACT US";
    nameLabel.setAttribute("for", "name");
    nameLabel.textContent = "Name:";
    nameInput.id = "name";
    nameInput.placeholder = "Full name";
    emailLabel.setAttribute("for", "email");
    emailLabel.textContent = "Email:";
    // check for proper formatting
    emailInput.id = "email";
    emailInput.placeholder = "yourname@example.com";
    messageLabel.setAttribute("for", "message");
    messageLabel.textContent = "Message:";
    messageInput.id = "message";
    messageInput.placeholder = "Your message here!";
    messageInput.maxLength = 3000;
    submitButton.id = "submit";
    submitButton.textContent = "Submit";
    submitButton.type = "button";



    form.append(
        nameLabel, 
        nameInput, 
        emailLabel, 
        emailInput, 
        messageLabel, 
        messageInput, 
        submitButton
        );

    content.append(
        headline, 
        description,
        form
        );

    return content;
}

export { loadContactsPage };