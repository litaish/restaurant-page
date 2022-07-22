import 'normalize.css/normalize.css';
import './css/style.css';
import Ramen from './img/ramen.jpg';
import homeMe from './modules/home';

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

  // const myIcon = new Image();

  // myIcon.src = Ramen;


  // element.appendChild(myIcon);
  
    return element;
  }
  
  document.body.appendChild(component());