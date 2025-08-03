import React from 'react';
import './Admin.css';

const Admin = () => {
  return (
    <div className="admin-container">
      <h1 className="admin-title">Interface d'administration</h1>
      <p className="admin-description">
        Gérez les <strong>joueurs</strong>, <strong>actualités</strong>, <strong>matchs</strong>, <strong>photos</strong> et <strong>vidéos</strong> depuis ici.
      </p>
      <a
        href="https://ecolefootmbnk-ecolefoot-backend-4.onrender.com/admin"
        target="_blank"
        rel="noopener noreferrer"
        className="admin-button"
      >
        Accéder à l’administration Django
      </a>
    </div>
  );
};

export default Admin;
