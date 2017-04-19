import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer'


let store = createStore(reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
//Esto es para habilitar Redux Dev Tools

ReactDOM.render(
  <Provider store={store}>
	<App />
  </Provider>,
  document.getElementById('root')
);
