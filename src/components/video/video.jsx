import React from 'react';
import './video.css';
const videoUrls = [
  'https://drive.google.com/file/d/1Q7l95aJrqJaA8eHNBKvHHi9gqyUZIDvI/preview',
  'https://drive.google.com/file/d/1-6OBfen_6HJt4VQelphadbpkmDPeJ6V9/preview',
  'https://drive.google.com/file/d/10nYNQVaorIxv_Qxbpp8Q4vqiCkng-cPU/preview',
  'https://drive.google.com/file/d/1mzEEvHWGoanWkKUPhfp4sbSyapNl7Bwc/preview',
  'https://drive.google.com/file/d/1Nwo5ou9vhsgQ6TFQJGYnUNUzqrmuA6aO/preview',
];

const Video = () => {
  return (
    <section id='video'>
      <h5> Videos of my Recent Work</h5>
      <h2>Videos</h2>
      <div
        className='video-section'
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '30px',
        }}
      >
        {videoUrls.map((url, index) => (
          <iframe
            className='video'
            key={index}
            width='560'
            height='315'
            src={url}
            title='Video Player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        ))}
      </div>
    </section>
  );
};

export default Video;
