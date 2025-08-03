import api from './axiosConfig';

// Retourne la liste des entraîneurs (tableau)
export const getEntraineurs = () => 
  api.get('entraineurs/').then(res => res.data);

// Retourne un entraîneur unique (objet)
export const getEntraineur = (id) => 
  api.get(`entraineurs/${id}/`).then(res => res.data);

// Crée un nouvel entraîneur
export const createEntraineur = (data) => 
  api.post('entraineurs/', data).then(res => res.data);

// Met à jour un entraîneur existant
export const updateEntraineur = (id, data) => 
  api.put(`entraineurs/${id}/`, data).then(res => res.data);

// Supprime un entraîneur
export const deleteEntraineur = (id) => 
  api.delete(`entraineurs/${id}/`);
