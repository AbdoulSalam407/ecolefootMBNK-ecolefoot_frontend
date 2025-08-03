import React, { useState } from 'react';
import { createInscription } from '../api/inscriptions';
import './Inscriptions.css';

const Inscriptions = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    date_naissance: '',
    telephone: '',
    categorie: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createInscription(formData);
      alert("✅ Inscription réussie !");
      setFormData({
        nom: '',
        prenom: '',
        date_naissance: '',
        telephone: '',
        categorie: '',
      });
    } catch (error) {
      console.error("Erreur d'inscription :", error.response?.data || error.message);
      alert("❌ Erreur lors de l'inscription.");
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Inscription à l'école de foot</h2>
      <form className="inscription-form" onSubmit={handleSubmit}>
        <label>
          Nom :
          <input name="nom" value={formData.nom} onChange={handleChange} required />
        </label>

        <label>
          Prénom :
          <input name="prenom" value={formData.prenom} onChange={handleChange} required />
        </label>

        <label>
          Date de naissance :
          <input
            type="date"
            name="date_naissance"
            value={formData.date_naissance}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Téléphone :
          <input name="telephone" value={formData.telephone} onChange={handleChange} required />
        </label>

        <label>
          Catégorie (ex: U10, U13, Senior) :
          <input name="categorie" value={formData.categorie} onChange={handleChange} required />
        </label>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Inscriptions;
