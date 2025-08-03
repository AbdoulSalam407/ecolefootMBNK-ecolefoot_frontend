import React, { useEffect, useState } from 'react';
import { getJoueurs } from '../api/joueurs';
import './Joueurs.css'; // Fichier CSS à créer

const Joueurs = () => {
  const [joueurs, setJoueurs] = useState([]);

  useEffect(() => {
    getJoueurs()
      .then(data => setJoueurs(data))
      .catch(error => {
        console.error("Erreur lors du chargement des joueurs :", error);
        setJoueurs([]);
      });
  }, []);

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return d.toLocaleDateString('fr-FR');
  };

  return (
    <div className="joueurs-container">
      <h1 className="joueurs-title">Nos Joueurs</h1>
      <div className="joueurs-grid">
        {joueurs.map(joueur => (
          <div key={joueur.id} className="joueur-card">
            {joueur.photo && (
              <img 
                src={joueur.photo} 
                alt={`${joueur.prenom} ${joueur.nom}`} 
                className="joueur-photo" 
              />
            )}
            <div className="joueur-info">
              <h3>{joueur.prenom} {joueur.nom}</h3>
              <p><strong>Poste :</strong> {joueur.poste}</p>
              {joueur.equipe && (
                <p><strong>Équipe :</strong> {joueur.equipe.nom} ({joueur.equipe.categorie})</p>
              )}
              <p className="joueur-date"><strong>Naissance :</strong> {formatDate(joueur.date_naissance)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Joueurs;
