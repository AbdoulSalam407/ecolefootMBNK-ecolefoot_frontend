import api from './axiosConfig';

// Retourne uniquement le tableau des contacts
export const getContacts = () => 
  api.get('contacts/').then(res => res.data);

// Retourne un contact unique
export const getContact = (id) => 
  api.get(`contacts/${id}/`).then(res => res.data);

// Crée un nouveau contact
export const createContact = (data) => 
  api.post('contacts/', data).then(res => res.data);

// Supprime un contact
export const deleteContact = (id) => 
  api.delete(`contacts/${id}/`);
