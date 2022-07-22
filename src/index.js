import 'normalize.css/normalize.css';
import './assets/styles/style.css';
import Ramen from './assets/images/ramen.jpg';
import displayNav from './modules/nav';

// Creates container element that will hold all page content
function content() {
  const element = document.createElement("div");

  element.setAttribute("id", "content");

  return element;
}

// on load display home page and navbar
window.addEventListener("load", () => {
  displayNav(["Home", "Menu", "Contact"]);

  document.body.appendChild(content());
})



  