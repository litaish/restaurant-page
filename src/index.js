import 'normalize.css/normalize.css';
import './assets/styles/style.css';
import Ramen from './assets/images/ramen.jpg';
import homeMe from './modules/home';

function content() {
  const element = document.createElement("div");

  element.setAttribute("id", "content");

  return element;
}

document.body.appendChild(content());

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerText = "I am working!";
    element.classList.add('hello');

    btn.innerHTML = 'Click me and check the console!';

    btn.onclick = homeMe;
  
  
    element.appendChild(btn);

     // Add the image to our existing div.

  const myIcon = new Image();

  myIcon.src = Ramen;


  element.appendChild(myIcon);
  
    return element;
  }
  
  document.body.appendChild(component());
  