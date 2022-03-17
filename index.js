import mPromise from './m-promise';
import './style.css';

function sleep() {
  return new mPromise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS ...</h1>`;

sleep()
  .then(() => {
    const appDiv = document.getElementById('app');
    appDiv.innerHTML = `<h1>JS Starter</h1>`;
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log('done');
  });
