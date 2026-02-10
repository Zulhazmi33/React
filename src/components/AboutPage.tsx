import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About This Project</h1>
        <Link to="/" className="back-link">← Back to Home</Link>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>React Concepts Demonstrated</h2>
          <ul>
            <li><strong>Components:</strong> Reusable UI building blocks (UserCard, LoginForm, DataFetcher)</li>
            <li><strong>JSX:</strong> HTML-like syntax in JavaScript</li>
            <li><strong>Props:</strong> Passing data from parent to child components</li>
            <li><strong>State (useState):</strong> Managing component-level data</li>
            <li><strong>Effects (useEffect):</strong> Side effects and lifecycle management</li>
            <li><strong>Context API:</strong> Global state management (UserContext)</li>
            <li><strong>Custom Hooks:</strong> Reusable logic (useFetch, useLocalStorage)</li>
            <li><strong>React Router:</strong> Navigation between pages</li>
            <li><strong>Utility Functions:</strong> Data transformation (formatters)</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Angular vs React</h2>
          <div className="comparison-grid">
            <div className="comparison-card">
              <h3>Angular Component</h3>
              <p>@Component decorator, template files, TypeScript class</p>
            </div>
            <div className="comparison-card">
              <h3>React Component</h3>
              <p>Function returning JSX, hooks for state</p>
            </div>
            <div className="comparison-card">
              <h3>Angular @Input/@Output</h3>
              <p>Props and callbacks</p>
            </div>
            <div className="comparison-card">
              <h3>React Props</h3>
              <p>Function parameters</p>
            </div>
            <div className="comparison-card">
              <h3>Angular Pipes</h3>
              <p>Template syntax transformations</p>
            </div>
            <div className="comparison-card">
              <h3>React Utility Functions</h3>
              <p>Regular JavaScript functions</p>
            </div>
            <div className="comparison-card">
              <h3>Angular Services</h3>
              <p>Injectable classes with @Injectable</p>
            </div>
            <div className="comparison-card">
              <h3>React Context/Hooks</h3>
              <p>Context API and custom hooks</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Project Structure</h2>
          <pre className="code-block">
{`src/
├── components/          # UI components
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── LoginForm.tsx
│   ├── UserCard.tsx
│   └── DataFetcher.tsx
├── context/            # Context API (like services)
│   └── UserContext.tsx
├── hooks/              # Custom hooks
│   └── useCustomHooks.tsx
├── utils/              # Utility functions (like pipes)
│   └── formatters.tsx
├── App.tsx             # Root component with routing
└── index.tsx           # Entry point`}
          </pre>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
