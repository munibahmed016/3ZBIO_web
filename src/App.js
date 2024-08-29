import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Index';
import Home from './Components/Home';
import Categories from './Components/Categories';

function App() {
  return (
    <Router>
    <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Categories/*" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
