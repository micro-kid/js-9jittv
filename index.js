import debounce from './debounce';
import './style.css';

let counter = 0;

const add = debounce(() => {
  counter++;
  const appDiv = document.getElementById('counter');
  appDiv.innerHTML = counter;
}, 500);

document.getElementById('button').addEventListener(
  'click',
  () => {
    add();
  },
  false
);
