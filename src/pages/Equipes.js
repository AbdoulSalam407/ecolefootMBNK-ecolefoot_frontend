import React, { useEffect, useState } from 'react';
import { getEquipes } from '../api/equipes';
import './Equipes.css'; // fichier CSS à créer

function Equipes() {
  const [equipes, setEquipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getEquipes()
      .then(data => {
        setEquipes(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Erreur lors du chargement des équipes:', err);
        setError("Une erreur s'est produite");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="loading-message">Chargement des équipes...</p>;
  if (error) return <p className="error-message">{error}</p>;

  return (
    <div className="equipes-container">
      <h1 className="equipes-title">Nos Équipes</h1>
      {Array.isArray(equipes) && equipes.length > 0 ? (
        <div className="equipes-grid">
          {equipes.map(equipe => (
            <div key={equipe.id} className="equipe-card">
              <h2>{equipe.nom}</h2>
              <ul>
                {equipe.joueurs && equipe.joueurs.map(joueur => (
                  <li key={joueur.id}>{joueur.nom}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-data">Aucune équipe disponible.</p>
      )}
    </div>
  );
}

export default Equipes;
