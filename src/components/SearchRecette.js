import React, { useState } from 'react';
import '../styles/SearchRecette.css';
import SearchIcon from '@mui/icons-material/Search';

const SearchRecette = () => {

  return (
    <div className="search-recette-container">
        <div className='input-container'>
            <input
                type="text"
                placeholder="Rechercher une recette..."
                className="recette-input"
            />
            <button className="search-button">
                <SearchIcon/>
            </button>
        </div>
      <div className="recette-list">
      </div>
    </div>
  );
};

export default SearchRecette;
