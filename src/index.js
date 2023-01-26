import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';  // Necessário para a conexão React Redux
import App from './App';
import './index.css';
import { store } from './store/store';  // Esta é a store criada

// é neste arquvio que devemos trabalhar todas as stores fazendo a conexão entre o Redux e o React

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
