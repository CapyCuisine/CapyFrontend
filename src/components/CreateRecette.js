import React, { useState } from 'react';
import AddIngredient from './AddIngredient';
import '../styles/CreateRecette.css';

const CreateRecette = () => {
  const [recette, setRecette] = useState({
    titre: '',
    image: '',
    ingredients: '',
    etapes: '',
    tempsDeCuisson: '',
    nombreDePortions: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecette((prevRecette) => ({
      ...prevRecette,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Recette soumise :', recette);
  };

  return (
    <div className="create-recette-container">
      <form onSubmit={handleSubmit} className="create-recette-form">
        <label>
          Titre :
          <input type="text" name="titre" value={recette.titre} onChange={handleChange} />
        </label>

        <label>
          Image de la recette :
          <input type="text" name="image" value={recette.image} onChange={handleChange} />
        </label>

        <label>
          Étapes de préparation :
          <textarea name="etapes" value={recette.etapes} onChange={handleChange} />
        </label>

        <label>
          Temps de cuisson :
          <input type="text" name="tempsDeCuisson" value={recette.tempsDeCuisson} onChange={handleChange} />
        </label>

        <label>
          Nombre de portions :
          <input type="text" name="nombreDePortions" value={recette.nombreDePortions} onChange={handleChange} />
        </label>

        <button type="submit">Soumettre</button>
      </form>
      <div>
        <AddIngredient />
      </div>
    </div>
  );
};

export default CreateRecette;
