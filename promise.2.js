class MyPromise {
  constructor(executor) {
    this.status = 'pending'; // 初始状态为等待
    this.value = null; // 成功的值
    this.reason = null; // 失败的原因
    this.onFulfilledCallbacks = []; // 成功的回调函数存放的数组
    this.onRejectedCallbacks = []; // 失败的回调函数存放的数组
    let resolve = (value) => {
      if (this.status === 'pending') {
        this.status = 'fulfilled';
        this.value = value;
        this.onFulfilledCallbacks.forEach((fn) => fn()); // 调用成功的回调函数
      }
    };
    let reject = (reason) => {
      if (this.status === 'pending') {
        this.status = 'rejected';
        this.reason = reason;
        this.onRejectedCallbacks.forEach((fn) => fn()); // 调用失败的回调函数
      }
    };
    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }
  then(onFulfilled, onRejected) {
    // onFulfilled如果不是函数，则修改为函数，直接返回value
    onFulfilled =
      typeof onFulfilled === 'function' ? onFulfilled : (value) => value;
    // onRejected如果不是函数，则修改为函数，直接抛出错误
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (err) => {
            throw err;
          };
    return new MyPromise((resolve, reject) => {
      if (this.status === 'fulfilled') {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value);
            x instanceof MyPromise ? x.then(resolve, reject) : resolve(x);
          } catch (err) {
            reject(err);
          }
        });
      }
      if (this.status === 'rejected') {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            x instanceof MyPromise ? x.then(resolve, reject) : resolve(x);
          } catch (err) {
            reject(err);
          }
        });
      }
      if (this.status === 'pending') {
        this.onFulfilledCallbacks.push(() => {
          // 将成功的回调函数放入成功数组
          setTimeout(() => {
            let x = onFulfilled(this.value);
            x instanceof MyPromise ? x.then(resolve, reject) : resolve(x);
          });
        });
        this.onRejectedCallbacks.push(() => {
          // 将失败的回调函数放入失败数组
          setTimeout(() => {
            let x = onRejected(this.reason);
            x instanceof MyPromise ? x.then(resolve, reject) : resolve(x);
          });
        });
      }
    });
  }
}
