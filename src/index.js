import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { createStore } from 'redux';


// const store = createStore();
// console.log(store.getState()); // 현재 store 안에 들어있는 상태를 조회합니다.

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
