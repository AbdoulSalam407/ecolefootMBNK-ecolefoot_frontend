import React from 'react';
import logo from '../assets/logo.png'; // chemin relatif à ton composant

const Header = () => {
  return (
    <header style={{ textAlign: 'center', padding: '20px' }}>
      <img src={logo} alt="Logo de l'école de foot" style={{ width: '150px' }} />
      <h1>École de Foot Mbaye Ndoye</h1>
    </header>
  );
};

export default Header;
