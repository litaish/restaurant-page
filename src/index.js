import 'normalize.css/normalize.css';
import './assets/styles/style.css';
import  displayNav from './modules/nav';
import displayHome from './modules/home';
import displayMenu from './modules/menu';

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

  // displayHome(contentEl);
  displayMenu(contentEl);
})




  