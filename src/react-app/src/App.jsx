import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './css/header.css';
import Home from './components/Pages/Home/Home';
import Background from './components/Background/Background';
import About from './components/Pages/About';

function App() {
  return (
    <>

      <Background />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Home />} />
        <Route path="/projects" element={<Home />} />
        <Route path="/contact" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
