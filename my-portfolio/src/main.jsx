import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

import Home from './pages/Home';
import About from './pages/About';
import Message from './pages/Message';
import Contact from './pages/Contact';
import Project from './pages/Project';

AOS.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/message" element={<Message />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Project" element={<Project />} />
      </Routes>
    </Router>
  </React.StrictMode>
);