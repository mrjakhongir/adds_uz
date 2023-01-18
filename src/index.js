import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import './fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf';
import Root from './root/Root';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Root/>
    </BrowserRouter>
  </React.StrictMode>
);
