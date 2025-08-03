import React, { useState } from 'react';
import { createContact } from '../api/contacts';
import './Contact.css';

const Contact = () => {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createContact({ nom, email, message });
      alert('✅ Message envoyé !');
      setNom('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Erreur envoi message :', error);
      alert('❌ Une erreur est survenue.');
    }
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contactez-nous</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom"
          value={nom}
          onChange={e => setNom(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          rows="5"
          required
        />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;
