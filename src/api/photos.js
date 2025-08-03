import api from './axiosConfig';

export const getPhotos = () =>
  api.get('photos/').then(res => res.data);

export const getPhoto = (id) =>
  api.get(`photos/${id}/`).then(res => res.data);

export const createPhoto = (data) =>
  api.post('photos/', data, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }).then(res => res.data);

export const deletePhoto = (id) =>
  api.delete(`photos/${id}/`);
