import debounce from './debounce';
import './style.css';

let counter = 0;

// 持续点击 直到停止点击才会执行
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
