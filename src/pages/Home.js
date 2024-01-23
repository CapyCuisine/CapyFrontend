import React, { useState, useEffect } from 'react';
import '../styles/Home.css';


const lastRecipes = [
  {
    name: 'Recette 1',
    ingredients: ['2 cuillères à soupe d\'huile', '2 coeurs de laitue effeuillé', '25 g de Parmesan (copeaux)'],
    categories: ['Catégorie 1'],
    description: 'Description de la recette 1.',
    image: 'https://assets.afcdn.com/recipe/20190704/94705_w600.jpg',
    steps: ['2 cuillères à soupe d\'huile', '2 coeurs de laitue effeuillé', '25 g de Parmesan (copeaux)'],
    servings: 4,
    preparationTime: '30 minutes',
  },
  {
    name: 'Recette 2',
    ingredients: ['2 cuillères à soupe d\'huile', '2 coeurs de laitue effeuillé', '25 g de Parmesan (copeaux)'],
    categories: ['Catégorie 2'],
    description: 'Description de la recette 2.',
    image: 'https://assets.afcdn.com/recipe/20190219/88020_w600.jpg',
    steps: ['Étape A', 'Étape B', 'Étape C'],
    servings: 2,
    preparationTime: '45 minutes',
  },
];

const Home = () => {

  return (
    <div>
      <h2>Nos dernières recettes</h2>
      <div className="lastrecipes-container">
      {lastRecipes.map((lastRecipes, index) => (
      <div key={index} className="recipe-card">
          <p className="category-rectangle">{lastRecipes.categories}</p>  {/*catégorie*/}

        <div className="recipe-header">
          <h3 className='lastRecipe-title'>{lastRecipes.name}</h3>
          <p className='lastRecipe-description'>{lastRecipes.description}</p> {/*description*/}
        <hr></hr>
        </div>
        <div className="recipe-content">
          <div className="recipe-image-container">
          <img src={lastRecipes.image} alt={lastRecipes.name} className="recipe-image"/>
          </div>
          <div className="recipe-details">
            <div className='ingredient-container'>
            <p><strong>Ingrédients :</strong> </p>
            {lastRecipes.ingredients.map((ingredient, i) => (
              <ul key={i}>{ingredient}</ul>
            ))}
            </div>
            <div className='information-container'>
            <p><strong>Nombre de portions:</strong> {lastRecipes.servings}</p>
            <p><strong>Temps de réalisation:</strong> {lastRecipes.preparationTime}</p>
            </div>
          </div>
            <div className='step-container'>
            <hr></hr>
            <p><strong>Étapes:</strong> {lastRecipes.steps.join(', ')}</p>
            </div>
        </div>
      </div>
    ))}
  </div>
    </div>
  );
};

export default Home;