// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/login';
import Admin from './pages/admin';


function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const [authToken, setAuthToken] = useState('');

  useEffect(() => {
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
