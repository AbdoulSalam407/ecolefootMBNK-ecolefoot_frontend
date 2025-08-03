import api from './axiosConfig';

// Retourne uniquement le tableau d'actualités
export const getActualites = () => 
  api.get('actualites/').then(res => res.data);

// Retourne une actualité unique (objet)
export const getActualite = (id) => 
  api.get(`actualites/${id}/`).then(res => res.data);

// Crée une nouvelle actualité
export const createActualite = (data) => 
  api.post('actualites/', data).then(res => res.data);

// Met à jour une actualité existante
export const updateActualite = (id, data) => 
  api.put(`actualites/${id}/`, data).then(res => res.data);

// Supprime une actualité
export const deleteActualite = (id) => 
  api.delete(`actualites/${id}/`);
