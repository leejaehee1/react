import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import {Provider} from 'react-redux';
// import store from './store';

// import { createStore } from 'redux';



// const store = createStore();
// console.log(store.getState()); // 현재 store 안에 들어있는 상태를 조회합니다.

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
