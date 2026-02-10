import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header/Header';
import { ThemeProvider } from './context/ThemeProvider';
import './App.css';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <nav>
          <Link to="/home">Home</Link> | <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
