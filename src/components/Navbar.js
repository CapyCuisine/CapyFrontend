// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Accueil</Link>
        </li>
        <li className="nav-item">
          <Link to="/categories">Catégories</Link>
        </li>
        <li className="nav-item">
          <Link to="/propos">A propos</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
