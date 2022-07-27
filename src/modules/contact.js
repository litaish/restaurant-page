const contactInfo = {
    workHours: "10:00 - 23:00",
    telephone: "+3712848484",
    location: "1659 Stockert Hollow Road Seattle Washington",
}

const displayContact = (content) => {
    displayContactInfo(content);

    // Create form and map wrapper
    const formMapWrapper = document.createElement("div");
    formMapWrapper.classList.add("form-map-wrapper");
    displayForm(formMapWrapper);
    displayMap(formMapWrapper);
    content.appendChild(formMapWrapper);
}

const createInformationItem = (title, information) => {
    const itemWrapper = document.createElement("div");
    itemWrapper.classList.add("info-item-wrapper");

    const titleEl = document.createElement("p");
    titleEl.classList.add("info-item-title");
    titleEl.innerText = title;

    const informationEl = document.createElement("p");
    informationEl.classList.add("info-item-info");
    informationEl.innerText = information;

    itemWrapper.append(titleEl, informationEl);
    return itemWrapper;

}

const displayContactInfo = (content) => {
    // Information title
    const infoTitle = document.createElement("h1");
    infoTitle.classList.add("contact-info-title");
    infoTitle.innerText = "Information";
    content.appendChild(infoTitle);

    // Contact Information
    const contactInfoWrapper = document.createElement("div");
    contactInfoWrapper.classList.add("contact-info-wrapper");
    
    const workHourEl = createInformationItem("Work Hours", contactInfo.workHours);
    const telephoneEl = createInformationItem("Telephone", contactInfo.telephone);
    const locationEl = createInformationItem("Location", contactInfo.location);

    contactInfoWrapper.append(workHourEl, telephoneEl, locationEl);
    content.appendChild(contactInfoWrapper);
}

const displayForm = (formMapWrapper) => {
    const formWrapper = document.createElement("div");

    const formTitle = document.createElement("h1");
    formTitle.innerText = "Contact Us";
    formWrapper.appendChild(formTitle);

    const form = document.createElement("form");
    form.setAttribute("method", "post");

    const ul1 = document.createElement("ul");
    ul1.classList.add("form-group");
    ul1.innerHTML = `
    <li>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name">
    </li>
    <li>
        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email">
    </li> 
    `

    const ul2 = document.createElement("ul");
    ul2.innerHTML = `
    <li>
        <label for="msg">Message:</label>
        <textarea name="msg" id="msg" cols="30" rows="10"></textarea>
    </li>
    <li class="btn-wrapper">
        <button type="submit">Submit Your Message</button>
    </li>
    `
    form.append(ul1, ul2);
    formWrapper.append(form);

    formMapWrapper.appendChild(formWrapper);
}

const displayMap = (formMapWrapper) => {
    const mapDiv = document.createElement("div");
    mapDiv.setAttribute("id", "map");
    formMapWrapper.appendChild(mapDiv);
}

export default displayContact;