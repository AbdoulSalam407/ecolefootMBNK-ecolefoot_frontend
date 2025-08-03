import React from 'react';
import './Apropos.css';

const Apropos = () => (
  <div className="apropos-container">
    <h1 className="apropos-title">À propos de l'école</h1>
    <p className="apropos-text">
      L'école de foot <strong>Mbaye Ndoye</strong> vise à former les jeunes talents de Kidira, en leur offrant un encadrement professionnel, des infrastructures adaptées et des valeurs sportives.
    </p>

    <h2 className="apropos-subtitle">Encadrement</h2>
    <ul className="apropos-list">
      <li><strong>Coach principal :</strong> Mbaye Ndoye</li>
      <li><strong>Entraîneurs :</strong> Issa Ba, Mamadou Sarr, Abdoulaye Diallo</li>
    </ul>
  </div>
);

export default Apropos;
