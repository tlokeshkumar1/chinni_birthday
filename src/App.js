import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Wishes from './components/Wishes'; // Adjust the path as necessary
import Wishesvideo from './components/Wishesvideo';

function App() {
  return (
      <Router>
          <nav>
              <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/video">Birthday Wish Video</Link></li>
              </ul>
          </nav>
          <Routes>
              <Route path="/" element={<Wishes />} />
              <Route path="/video" element={<Wishesvideo />} />
          </Routes>
      </Router>
  );
}

export default App;