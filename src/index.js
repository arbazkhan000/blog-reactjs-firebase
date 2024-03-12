import { NextUIProvider } from "@nextui-org/react";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <App />
      </NextUIProvider>


    </BrowserRouter>
  </React.StrictMode>
);


