import api from './axiosConfig';

// Retourne la liste des inscriptions (tableau)
export const getInscriptions = () =>
  api.get('inscriptions/').then(res => res.data);

// Retourne une inscription spécifique (objet)
export const getInscription = (id) =>
  api.get(`inscriptions/${id}/`).then(res => res.data);

// Crée une nouvelle inscription
export const createInscription = (data) =>
  api.post('inscriptions/', data).then(res => res.data);

// Supprime une inscription
export const deleteInscription = (id) =>
  api.delete(`inscriptions/${id}/`);
