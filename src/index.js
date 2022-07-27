import 'normalize.css/normalize.css';
import './assets/styles/style.css';
import   displayNav from './modules/nav';
import displayHome from './modules/home';
import displayMenu from './modules/menu';
import displayContact from './modules/contact';

// Creates container element that will hold all page content
function getContent() {
  const element = document.createElement("div");

  element.setAttribute("id", "content");

  return element;
}

// on load display home page and navbar
window.addEventListener("load", () => {
  displayNav(["Home", "Menu", "Contact"]);

  // Create an instance of content element
  const contentEl = getContent()

  document.body.appendChild(contentEl);

  // On init display home page
  displayHome(contentEl);
  // Add event listeners for navbar list items
  displayModule(contentEl);
})

const displayModule = (contentEl) => {
  // Get all li elements
  const liEls = document.querySelectorAll(".nav-element");

  for (let i = 0; i < liEls.length; i++) {
      liEls[i].addEventListener("click", function (e) {

          switch(e.target.innerHTML) {
            case "Home":
              clearContent(contentEl);
              displayHome(contentEl);
            break;
            case "Menu":
              clearContent(contentEl);
              displayMenu(contentEl);
            break;
            case "Contact":
              clearContent(contentEl);
              displayContact(contentEl);
            break;
          }
      })
  }
}

const clearContent = (contentEl) => {
  contentEl.innerHTML = "";
  
}




  