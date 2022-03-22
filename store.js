// import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createStore, combineReducers, applyMiddleware } from './redux';

const initMilkState = {
  milk: 0,
};
function milkReducer(state = initMilkState, action) {
  switch (action.type) {
    case 'PUT_MILK':
      return { ...state, milk: state.milk + action.count };
    case 'TAKE_MILK':
      return { ...state, milk: state.milk - action.count };
    default:
      return state;
  }
}

const initRiceState = {
  rice: 0,
};
function riceReducer(state = initRiceState, action) {
  switch (action.type) {
    case 'PUT_RICE':
      return { ...state, rice: state.rice + action.count };
    case 'TAKE_RICE':
      return { ...state, rice: state.rice - action.count };
    default:
      return state;
  }
}

// 使用combineReducers组合两个reducer
const reducer = combineReducers({
  milkState: milkReducer,
  riceState: riceReducer,
});

// logger是一个中间件，注意返回值嵌了好几层函数
function logger(store) {
  return function (next) {
    return function (action) {
      console.group(action.type);
      console.info('dispatching', action);
      let result = next(action);
      console.log('next state', store.getState());
      console.groupEnd();
      return result;
    };
  };
}

function logger2(store) {
  return function (next) {
    return function (action) {
      let result = next(action);
      console.log('logger2');
      return result;
    };
  };
}

export default createStore(reducer, applyMiddleware(logger, logger2));
