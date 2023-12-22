import React from 'react';
import ReactDOM from 'react-dom/client';

import 'react-toastify/dist/ReactToastify.css';

import App from './views/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
