// Dino.js
import React, { useEffect, useState } from 'react';
import './Dino.css'; // Importer le fichier de style CSS pour Dino

const Biome = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch dinosaur data
    fetch('https://dinoproject.onrender.com/api/biome')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="dino-container">
            <h2>Biome Data</h2>
      {data.map(Biome => (
        <div key={Biome.id} className="dino-item">
          <div className="dino-info">
            <strong>Name:</strong> {Biome.data.name} <br />
            <strong>Description:</strong> {Biome.data.description} <br />
            <strong>Flora:</strong> {Biome.data.flora} <br />
            <strong>Fauna:</strong> {Biome.data.fauna} <br />
            <strong>Temperature:</strong> {Biome.data.temperature} <br />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Biome;
