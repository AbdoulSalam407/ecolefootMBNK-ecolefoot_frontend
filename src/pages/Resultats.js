import React, { useEffect, useState } from 'react';
import { getMatchs } from '../api/matchs';
import './Resultats.css';

const Resultats = () => {
  const [matchs, setMatchs] = useState([]);

  useEffect(() => {
    getMatchs()
      .then(data => setMatchs(data))
      .catch(error => {
        console.error("Erreur lors du chargement des matchs :", error);
        setMatchs([]);
      });
  }, []);

  return (
    <div className="resultats-container">
      <h1 className="resultats-title">Résultats des Matchs</h1>
      <div className="matchs-grid">
        {matchs.map(match => (
          <div key={match.id} className="match-card">
            <div className="teams">
              <span className="team-name">{match.equipe1.nom}</span>
              <span className="score">{match.score1} - {match.score2}</span>
              <span className="team-name">{match.equipe2.nom}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resultats;
