import store from './store';
import './style.css';

const appDiv = document.getElementById('section');
appDiv.innerHTML = `<h1>milk: ${0}, rice: ${0}</h1>`;

// subscribe其实就是订阅store的变化，一旦store发生了变化，传入的回调函数就会被调用
// 如果是结合页面更新，更新的操作就是在这里执行
store.subscribe(() => {
  const { milkState, riceState } = store.getState();
  const appDiv = document.getElementById('section');
  appDiv.innerHTML = `<h1>milk: ${milkState.milk}, rice: ${riceState.rice}</h1>`;
});

document.getElementById('milk-add').addEventListener(
  'click',
  () => {
    store.dispatch({ type: 'PUT_MILK', count: 1 });
  },
  false
);
document.getElementById('milk-sub').addEventListener(
  'click',
  () => {
    store.dispatch({ type: 'TAKE_MILK', count: 1 });
  },
  false
);
document.getElementById('rice-add').addEventListener(
  'click',
  () => {
    store.dispatch({ type: 'PUT_RICE', count: 1 });
  },
  false
);
document.getElementById('rice-sub').addEventListener(
  'click',
  () => {
    store.dispatch({ type: 'TAKE_RICE', count: 1 });
  },
  false
);
