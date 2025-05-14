import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HelpdeskPage from './pages/HelpdeskPage';
import LostFoundPage from './pages/LostFoundPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page route */}
        <Route
          path="/"
          element={
            <div className="app">
              <header>
                <h1>Campus Connect</h1>
                <p>Your gateway to smart campus life.</p>
              </header>
              <main>
                <p>This is your React + Vite powered app. Customize this as needed.</p>
              </main>
            </div>
          }
        />
        
        {/* Other feature pages */}
        <Route path="/helpdesk" element={<HelpdeskPage />} />
        <Route path="/lost-found" element={<LostFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
