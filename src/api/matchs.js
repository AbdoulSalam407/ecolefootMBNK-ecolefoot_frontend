import api from './axiosConfig';

export const getMatchs = () =>
  api.get('matchs/').then(res => res.data);

export const getMatch = (id) =>
  api.get(`matchs/${id}/`).then(res => res.data);

export const createMatch = (data) =>
  api.post('matchs/', data).then(res => res.data);

export const updateMatch = (id, data) =>
  api.put(`matchs/${id}/`, data).then(res => res.data);

export const deleteMatch = (id) =>
  api.delete(`matchs/${id}/`);
