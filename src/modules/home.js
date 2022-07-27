const restaurantName = "Cofffe N' Dine";

const displayHome = (content) => {

    content.className = "content-home";
    displayTitle(content);
    displayInfo(content);
}

const displayTitle = (content) => {
    const titleContainer = document.createElement("div");
    titleContainer.className = "title-container"

    const title = document.createElement("h1");
    title.innerText = restaurantName;

    const titleLine = document.createElement("hr");
    titleLine.classList.add("title-line");

    // Append all children
    titleContainer.append(title, titleLine);
    content.appendChild(titleContainer);
}

const displayInfo = (content) => {
    const infoContainerEl = document.createElement("div");
    infoContainerEl.className = "info-container";
    content.appendChild(infoContainerEl);

    const pStreet = document.createElement("p");
    pStreet.innerText = "1659 Stockert Hollow Road Seattle Washington";
    
    const pCity = document.createElement("p");
    pCity.innerText = "Seattle";

    const pState = document.createElement("p");
    pState.innerText = "Washington";

    const infoLine = document.createElement("hr");
    
    const pWantOrder = document.createElement("p");
    pWantOrder.innerText = "Want To Order?";

    const orderBtn = document.createElement("button");
    orderBtn.innerText = "Order";

    infoContainerEl.append(pStreet, pCity, pState, infoLine, pWantOrder, orderBtn);
}

export default displayHome;