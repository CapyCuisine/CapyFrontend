import React, { useState } from 'react';
import '../styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulaire soumis avec les données :', formData);
  };

  return (
    <div className="contact-container">
      <div className="content-block">
        <h2>Contactez-nous</h2>
        <p>Si vous voulez faire part de vos retour sur le site ou pour toutes demandes particulières, n'hésitez pas à nous contacter. L'on vous recontactera par mail pour des réponses.</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="nom">Nom :</label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message :</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
