import React from 'react';
import { useUser } from '../../context/UserContext';
import LoginForm from '../LoginForm/LoginForm';
import UserCard from '../UserCard/UserCard';
import DataFetcher from '../DateFetcher/DataFetcher';
import { formatCurrency, capitalize } from '../../utils/formatters';
import './HomePage.css';

const HomePage: React.FC = () => {
  // Using context (similar to injecting Angular service)
  const { user, login, logout } = useUser();

  const handleLogin = (name: string, email: string) => {
    login(name, email);
  };

  return (
    <div className="home-page">
      <header className="header">
        <h1>React Learning Project</h1>
        <p>A comprehensive example demonstrating all React concepts</p>
      </header>

      <main className="main-content">
        {/* Conditional Rendering */}
        {!user ? (
          <div className="login-section">
            <p className="welcome-message">Please login to continue</p>
            <LoginForm onSubmit={handleLogin} />
          </div>
        ) : (
          <div className="user-section">
            <div className="welcome-banner">
              <h2>Welcome, {capitalize(user.name)}! 👋</h2>
              <button onClick={logout} className="logout-btn">Logout</button>
            </div>

            {/* Using child component with props */}
            <div className="user-info-section">
              <h3>Your Profile</h3>
              <UserCard 
                name={user.name}
                email={user.email}
                avatar="https://via.placeholder.com/50"
                onDelete={logout}
              />
            </div>

            {/* Demonstrating utility functions (like pipes) */}
            <div className="demo-section">
              <h3>Utility Functions Demo (Similar to Angular Pipes)</h3>
              <div className="demo-grid">
                <div className="demo-card">
                  <h4>Currency Formatting</h4>
                  <p>Amount: {formatCurrency(1234.56)}</p>
                </div>
                <div className="demo-card">
                  <h4>Text Capitalization</h4>
                  <p>Original: "hello world"</p>
                  <p>Result: {capitalize("hello world")}</p>
                </div>
              </div>
            </div>

            {/* Component demonstrating useEffect and custom hooks */}
            <DataFetcher />
          </div>
        )}
      </main>

      <footer className="footer">
        <p>Built with React + TypeScript</p>
      </footer>
    </div>
  );
};

export default HomePage;
