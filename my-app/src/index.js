import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import Auth0ProviderWithHistory from '../au';
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const client = process.env.REACT_APP_AUTH0_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Router>
        <Auth0ProviderWithHistory>
            <App />
        </Auth0ProviderWithHistory>
    </Router>
);
