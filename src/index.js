import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import "../node_modules/owl.carousel/dist/assets/owl.carousel.min.css"
import "../node_modules/owl.carousel/dist/assets/owl.theme.default.min.css"




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
