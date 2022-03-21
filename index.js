import EventEmitter from './EventEmitter';
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS ...</h1>`;

const ee = new EventEmitter();

ee.on('init', () => {
  const appDiv = document.getElementById('app');
  appDiv.innerHTML = `<h1>JS Starter</h1>`;
});

setTimeout(() => {
  ee.emit('init');
}, 2000);
