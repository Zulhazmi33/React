import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeProvider';
import './App.css';

// page
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header/Header';
import UseMemo from './pages/useMemo';
import CustomHook from './pages/customHook';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <nav>
          <Link to="/home">Home</Link> |{" "}
          <Link to="/about">About</Link> |{" "}
          <Link to="/useMemo">useMemo()</Link> |{" "}
          <Link to="/customHook">Custom hook</Link> |{" "}
        </nav>
        <div style={{padding: '5px'}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/useMemo" element={<UseMemo />} />
            <Route path="/customHook" element={<CustomHook />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
