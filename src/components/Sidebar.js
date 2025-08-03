import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import logo from '../assets/logo.png'; // adapte le chemin vers ton logo

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Bouton hamburger */}
      <div className="hamburger" onClick={toggleSidebar}>
        ☰
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        {/* Logo */}
        <div className="sidebar-logo">
          <img src={logo} alt="Logo École de Foot" />
        </div>
        <h2>École de Foot</h2>
        <nav>
          <ul>
            <li><Link to="/" onClick={closeSidebar}>Accueil</Link></li>
            <li><Link to="/apropos" onClick={closeSidebar}>À propos</Link></li>
            <li><Link to="/equipes" onClick={closeSidebar}>Équipes</Link></li>
            <li><Link to="/joueurs" onClick={closeSidebar}>Joueurs</Link></li>
            <li><Link to="/entraineurs" onClick={closeSidebar}>Entraîneurs</Link></li>
            <li><Link to="/resultats" onClick={closeSidebar}>Résultats</Link></li>
            <li><Link to="/galerie" onClick={closeSidebar}>Galerie</Link></li>
            <li><Link to="/inscriptions" onClick={closeSidebar}>Inscriptions</Link></li>
            <li><Link to="/contact" onClick={closeSidebar}>Contact</Link></li>
            <li><Link to="/admin" onClick={closeSidebar}>Admin</Link></li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
