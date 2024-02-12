import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './assets/Pages/Home.jsx';
import './assets/CSS/App.css';
import Indu from './assets/Pages/Indu.jsx';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='indu' element={<Indu />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
