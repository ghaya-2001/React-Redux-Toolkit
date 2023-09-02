import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';

// Log the store to console
console.log("Store:", store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

//provider role: When you create a Redux store, you pass it to the Provider as a prop, making
// the Redux store available to any nested components that need to access it.

