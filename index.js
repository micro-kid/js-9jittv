import deepClone from './deepClone';
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>View the console</h1>`;

const obj = {
  a: 1,
  b: '2',
  c: false,
  d: null,
  c: undefined,
  e: [1, 2, 3],
  f: {
    aa: 1,
    bb: '2',
  },
  g: function () {},
};

// 浅拷贝
const shallowObj = Object.assign({}, obj);
// 深拷贝
const deepObj = deepClone(obj);

obj.h = obj; // 循环引用 <circular reference>
obj.a = 2; // 基础类型
obj.e.push(4); // 引用类型 影响了浅拷贝的对象
obj.f.cc = true;

console.log(obj);
console.log(shallowObj);
console.log(deepObj);
