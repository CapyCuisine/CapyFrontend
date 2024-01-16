// AddIngredient.js

import React, { useState } from 'react';
import '../styles/AddIngredient.css';

const AddIngredient = () => {
  const [ingredient, setIngredient] = useState('');
  const [ingredientList, setIngredientList] = useState([]);

  const handleInputChange = (e) => {
    setIngredient(e.target.value);
  };

  const handleAddIngredient = () => {
    if (ingredient.trim() !== '') {
      setIngredientList((prevList) => [...prevList, ingredient]);
      setIngredient('');
    }
  };

  const handleDeleteIngredient = (index) => {
    const updatedList = [...ingredientList];
    updatedList.splice(index, 1);
    setIngredientList(updatedList);
  };

  return (
    <div className="add-ingredient-container">
      <input
        type="text"
        placeholder="Ajouter un ingrédient..."
        value={ingredient}
        onChange={handleInputChange}
        className="ingredient-input"
      />
      <button onClick={handleAddIngredient} className="add-button">
        +
      </button>
      <div className="ingredient-list">
        {ingredientList.map((ing, index) => ( 
          <div key={index} className="ingredient-container">
            <span className="ingredient-item">{ing}</span>
            <button onClick={() => handleDeleteIngredient(index)} className="delete-button">
              -
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddIngredient;
