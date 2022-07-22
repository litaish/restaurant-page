import 'normalize.css/normalize.css';
import './assets/styles/style.css';
import Ramen from './assets/images/ramen.jpg';
import homeMe from './modules/home';

// Creates container element that will hold all page content
function content() {
  const element = document.createElement("div");

  element.setAttribute("id", "content");

  return element;
}

// Create navbar
// document.body.innerHTML += ``

document.body.appendChild(content());

  