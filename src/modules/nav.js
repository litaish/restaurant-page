// Create navbar
const displayNav = (menuItems) => {
    const navEl = document.createElement("nav");
    const ulEl = document.createElement("ul");

    navEl.appendChild(ulEl);

    // Create li text nodes for every nav menu array item
    menuItems.forEach(element => {
        const liEl = document.createElement("li");
        liEl.appendChild(document.createTextNode(element));
        liEl.classList.add("nav-element");
        ulEl.appendChild(liEl);

    });

    document.body.appendChild(navEl);
}

export default displayNav;