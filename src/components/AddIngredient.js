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
          <div key={index} className="ingredient-item">
            {ing}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddIngredient;
