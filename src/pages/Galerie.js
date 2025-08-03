import React, { useEffect, useState } from 'react';
import { getPhotos } from '../api/photos';
import { getVideos } from '../api/videos';
import './Galerie.css';

const Galerie = () => {
  const [photos, setPhotos] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getPhotos().then(setPhotos);
    getVideos().then(setVideos);
  }, []);

  return (
    <div className="galerie-container">
      <h1 className="galerie-title">Galerie</h1>

      <section>
        <h2 className="section-title">Photos</h2>
        <div className="photo-grid">
          {photos.map(photo => (
            <div key={photo.id} className="photo-card">
              <img src={photo.image} alt={photo.description} />
              <p>{photo.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">Vidéos</h2>
        <div className="video-grid">
          {videos.map(video => (
            <div key={video.id} className="video-card">
              <video controls>
                <source src={video.url} type="video/mp4" />
                Votre navigateur ne prend pas en charge les vidéos.
              </video>
              <p>{video.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Galerie;
