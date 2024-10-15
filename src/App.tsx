import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Leaderboard from './pages/Leaderboard';
import Social from './pages/Social';
import Help from './pages/Help';
import About from './pages/About';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="container-fluid mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/social" element={<Social />} />
          <Route path="/help" element={<Help />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;