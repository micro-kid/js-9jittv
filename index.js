import throttle from './throttle';
import './style.css';

let counter = 0;

// 持续点击 固定1s触发一次
const add = throttle(() => {
  counter++;
  const appDiv = document.getElementById('counter');
  appDiv.innerHTML = counter;
}, 1000);

document.getElementById('button').addEventListener(
  'click',
  () => {
    add();
  },
  false
);
