import api from './axiosConfig';

export const getVideos = () => 
  api.get('videos/').then(res => res.data);

export const getVideo = (id) => 
  api.get(`videos/${id}/`).then(res => res.data);

export const createVideo = (data) => 
  api.post('videos/', data).then(res => res.data);

export const deleteVideo = (id) => 
  api.delete(`videos/${id}/`);
