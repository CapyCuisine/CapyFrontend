
import React from 'react';
import '../styles/CategorieType.css';

const CategorieType = ({ nomCategorie }) => {
  return (
    <div className="categorie-type">
      <div>{nomCategorie}</div>
    </div>
  );
};

export default CategorieType;
