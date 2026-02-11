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
import Parent from './pages/parent';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <nav>
          <Link to="/about">About</Link> | {" "}
          <Link to="/home">Component</Link> | {" "}
          <Link to="/useMemo">useMemo()</Link> | {" "}
          <Link to="/customHook">Custom hook</Link> | {" "}
          <Link to="/parent">Prop</Link> | {" "}
        </nav>
        <div style={{padding: '30px'}}>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home />} />
            <Route path="/useMemo" element={<UseMemo />} />
            <Route path="/customHook" element={<CustomHook />} />
            <Route path="/parent" element={<Parent />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
