import React, { useEffect, useState } from 'react';
import { getEntraineurs } from '../api/entraineurs';
import './Entraineurs.css';

const Entraineurs = () => {
  const [entraineurs, setEntraineurs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getEntraineurs()
      .then(data => {
        setEntraineurs(data);
        setError(null);
      })
      .catch(err => {
        console.error('Erreur lors du chargement des entraîneurs :', err);
        setError("Impossible de charger les entraîneurs");
      });
  }, []);

  return (
    <div className="entraineurs-container">
      <h1 className="entraineurs-title">Nos Entraîneurs</h1>
      {error && <p className="error">{error}</p>}
      <div className="entraineurs-grid">
        {entraineurs.map(entraineur => (
          <div key={entraineur.id} className="entraineur-card">
            <h3>{entraineur.prenom} {entraineur.nom}</h3>
            <p><strong>Poste :</strong> {entraineur.poste}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Entraineurs;
