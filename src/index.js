import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { SignProvider } from './contex/Contex';

import './index.css';

import Root from './root/Root';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
   <SignProvider>
        <Root />
   </SignProvider>
   
    </BrowserRouter>
  </React.StrictMode>
);
