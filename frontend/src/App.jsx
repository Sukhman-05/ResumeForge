import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route id="homePage" path="/" element={<Home />} />
        <Route id="signupPage" path="/signup" element={<Signup />} />
        <Route id="loginPage" path="/login" element={<Login />} />
        {/* Example of protecting a page */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <div>Dashboard Page (Protected)</div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

