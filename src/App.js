// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Login from './login';
import Admin from './admin';


function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const [authToken, setAuthToken] = useState('');

  useEffect(() => {
    // Placez votre logique useEffect ici si nécessaire
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

            <Route path="/login" element={<Login setAuthenticated={setAuthenticated} setAuthToken={setAuthToken}/>} />
            <Route
            path="/admin"
            element={authenticated ? <Admin authToken={authToken}/> : <Navigate to="/login" />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
