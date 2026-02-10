import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import './App.css';

// Main App component
const App: React.FC = () => {
  return (
    // Router provides navigation capabilities
    <Router>
      {/* UserProvider wraps the app to provide context globally */}
      <UserProvider>
        <div className="app">
          {/* Navigation bar */}
          <nav className="navbar">
            <div className="nav-container">
              <div className="nav-brand">React Learning</div>
              <div className="nav-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/about" className="nav-link">About</Link>
              </div>
            </div>
          </nav>

          {/* Routes - similar to Angular Router */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </UserProvider>
    </Router>
  );
};

export default App;
