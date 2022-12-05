import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { Usercontextprovider } from "./useeffect/usecontext/usercontext";

import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));





root.render(
    // <Usercontextprovider>
    // </Usercontextprovider>
    <BrowserRouter>
        <App />
    </BrowserRouter>





);

