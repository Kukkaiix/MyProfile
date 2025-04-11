import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import './index.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
);