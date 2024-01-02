// ProtectedPage.js
import React, { Component } from 'react';

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        name: '',
        species: '',
        favoriteFood: '',
        rideable: false,
        tamable: false,
        tamingTime: '',
        habitat: '',
        map: '',
        active: true,
        image: '',
      },
    };
  }

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: type === 'checkbox' ? checked : value,
      },
    }));
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { authToken } = this.props;

    try {
      const response = await fetch('https://dinoproject.onrender.com/api/dinosaurs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
        body: JSON.stringify(this.state.formData),
      });

      if (response.ok) {
        const responseData = await response.json();
        alert('Dinosaur created successfully with ID: ' + responseData.id);
      } else {
        const errorData = await response.json();
        alert('Failed to create dinosaur. Error: ' + errorData.error);
      }
    } catch (error) {
      console.error('Error creating dinosaur:', error);
      alert('Internal Server Error');
    }
  };

  render() {
    return (
      <div>
        <h2>Création de dinosaure</h2>
  
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={this.state.formData.name}
            onChange={this.handleChange}
            required
          />
  
          <label htmlFor="species">Species:</label>
          <input
            type="text"
            id="species"
            name="species"
            value={this.state.formData.species}
            onChange={this.handleChange}
            required
          />
  
          <label htmlFor="favoriteFood">Favorite Food:</label>
          <input
            type="text"
            id="favoriteFood"
            name="favoriteFood"
            value={this.state.formData.favoriteFood}
            onChange={this.handleChange}
          />
  
          <label htmlFor="rideable">Rideable:</label>
          <input
            type="checkbox"
            id="rideable"
            name="rideable"
            checked={this.state.formData.rideable}
            onChange={this.handleChange}
          />
  
          <label htmlFor="tamable">Tamable:</label>
          <input
            type="checkbox"
            id="tamable"
            name="tamable"
            checked={this.state.formData.tamable}
            onChange={this.handleChange}
          />
  
          <label htmlFor="tamingTime">Taming Time:</label>
          <input
            type="text"
            id="tamingTime"
            name="tamingTime"
            value={this.state.formData.tamingTime}
            onChange={this.handleChange}
          />
  
          <label htmlFor="habitat">Habitat:</label>
          <input
            type="text"
            id="habitat"
            name="habitat"
            value={this.state.formData.habitat}
            onChange={this.handleChange}
          />
  
          <label htmlFor="map">Map:</label>
          <input
            type="text"
            id="map"
            name="map"
            value={this.state.formData.map}
            onChange={this.handleChange}
          />
  
          <label htmlFor="active">Active:</label>
          <input
            type="checkbox"
            id="active"
            name="active"
            checked={this.state.formData.active}
            onChange={this.handleChange}
          />
  
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={this.state.formData.image}
            onChange={this.handleChange}
          />
  
          <button type="submit">Create Dinosaur</button>
        </form>
      </div>
    );
  }
  
}

export default Admin;
