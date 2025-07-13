import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import StudentVerification from './pages/StudentVerification';
import TalentShowVerification from './pages/TalentShowVerification';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/student" element={<StudentVerification />} />
        <Route path="/talent" element={<TalentShowVerification />} />
      </Routes>
    </Router>
  );
}