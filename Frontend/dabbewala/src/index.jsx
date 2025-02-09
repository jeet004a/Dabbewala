import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App';
import UserContext from './context/UserContext';
import {BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <UserContext>
  //     <BrowserRouter>
  //       <App />
  //     </BrowserRouter>
  //   </UserContext>
  // </StrictMode>
        <UserContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        </UserContext>
  
)