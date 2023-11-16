import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import { FavoritesProvider } from './contexts/FavoritesContext';
import store from './store';

// @TODO добавлен роутер

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <FavoritesProvider>
          <App />
        </FavoritesProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
