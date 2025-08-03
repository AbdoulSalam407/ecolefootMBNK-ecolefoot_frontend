import api from './axiosConfig';

export const getJoueurs = () =>
  api.get('joueurs/').then(res => res.data);

export const getJoueur = (id) =>
  api.get(`joueurs/${id}/`).then(res => res.data);

export const createJoueur = (data) =>
  api.post('joueurs/', data).then(res => res.data);

export const updateJoueur = (id, data) =>
  api.put(`joueurs/${id}/`, data).then(res => res.data);

export const deleteJoueur = (id) =>
  api.delete(`joueurs/${id}/`);
