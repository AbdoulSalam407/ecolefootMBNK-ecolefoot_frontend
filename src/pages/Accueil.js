import React, { useEffect, useState } from 'react';
import { getActualites } from '../api/actualites';
import './Accueil.css'; // <-- style externe

function Accueil() {
  const [actus, setActus] = useState([]);

  useEffect(() => {
    getActualites().then(setActus);
  }, []);

  return (
    <div className="accueil-container">
      <header className="accueil-header">
        <h1>Bienvenue à l’école de foot Mbaye Ndoye</h1>
        <p>Une formation de qualité pour les futurs champions</p>
      </header>

      <section className="actualites-section">
        <h2>📰 Actualités</h2>
        <div className="actus-list">
          {actus.map(actu => (
            <div className="actu-card" key={actu.id}>
              <h3>{actu.titre}</h3>
              <p>{actu.contenu}</p>
              <span className="actu-date">
                {new Date(actu.date_pub).toLocaleDateString()}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Accueil;
