// Dino.js
import React, { useEffect, useState } from 'react';
import './Dino.css'; // Importer le fichier de style CSS pour Dino

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
    <div className="dino-container">
      <h2>Dinosaur Data</h2>
      <ul>
        {data.map(dino => (
          <li key={dino.id} className="dino-item">
            <strong>Name:</strong> {dino.data.name} <br />
            <strong>Species:</strong> {dino.data.species} <br />
            <strong>Favorite Food:</strong> {dino.data.favoriteFood} <br />
            <strong>Map:</strong> {dino.data.map} <br />
            <strong>Habitat:</strong> {dino.data.habitat} <br />
            <strong>Tamable:</strong> {dino.data.tamable ? 'Yes' : 'No'} <br />
            <strong>Rideable:</strong> {dino.data.rideable ? 'Yes' : 'No'} <br />
            <strong>Taming Time:</strong> {dino.data.tamingTime} <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dino;
