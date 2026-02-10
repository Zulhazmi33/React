import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Entry point of the React application
// This renders the App component into the DOM
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  // StrictMode helps identify potential problems in the app
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
