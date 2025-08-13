import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Registration from './pages/Registration';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Registration/>} />
      </Routes>
  </Router>
  );
}
