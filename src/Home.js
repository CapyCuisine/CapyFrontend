// Dino.js
import React, { useEffect, useState } from 'react';
import logo from './logo.svg';


const Dino = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch dinosaur data
    fetch('http://localhost:3000/api/dinosaurs')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Page Home</h2>
    </div>
  );
};

export default Dino;
