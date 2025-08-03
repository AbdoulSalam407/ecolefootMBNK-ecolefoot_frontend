import api from './axiosConfig';

// Récupérer toutes les équipes
export const getEquipes = () =>
  api.get('equipes/').then(res => res.data);

// Récupérer une équipe spécifique
export const getEquipe = (id) =>
  api.get(`equipes/${id}/`).then(res => res.data);

// Créer une nouvelle équipe
export const createEquipe = (data) =>
  api.post('equipes/', data).then(res => res.data);

// Mettre à jour une équipe existante
export const updateEquipe = (id, data) =>
  api.put(`equipes/${id}/`, data).then(res => res.data);

// Supprimer une équipe
export const deleteEquipe = (id) =>
  api.delete(`equipes/${id}/`).then(res => res.data);
