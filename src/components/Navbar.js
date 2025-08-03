import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>École Foot Mbaye Ndoye</div>
      <ul style={styles.navLinks}>
        <li><Link to="/" style={styles.link}>Accueil</Link></li>
        <li><Link to="/apropos" style={styles.link}>À propos</Link></li>
        <li><Link to="/equipes" style={styles.link}>Équipes</Link></li>
        <li><Link to="/joueurs" style={styles.link}>Joueurs</Link></li>
        <li><Link to="/entraineurs" style={styles.link}>Entraîneurs</Link></li>
        <li><Link to="/resultats" style={styles.link}>Résultats</Link></li>
        <li><Link to="/galerie" style={styles.link}>Galerie</Link></li>
        <li><Link to="/inscriptions" style={styles.link}>Inscriptions</Link></li>
        <li><Link to="/contact" style={styles.link}>Contact</Link></li>
        <li><Link to="/admin" style={styles.link}>Admin</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#004080',
    padding: '0.5rem 2rem',
    color: 'white',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
    margin: 0,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: '500',
  },
};

export default Navbar;
