import React from 'react';

const Help: React.FC = () => {
  const videos = [
    { title: 'Getting Started', description: 'Learn the basics of LithiumElectro' },
    { title: 'Advanced Strategies', description: 'Take your game to the next level' },
    { title: 'Troubleshooting', description: 'Common issues and how to solve them' },
    { title: 'Community Guidelines', description: 'Be a positive member of our community' },
  ];

  return (
    <div className="help-videos">
      <h1 className="text-center mb-4">Help Center</h1>
      <div className="row">
        {videos.map((video, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="video-placeholder">Video {index + 1}</div>
            <h3>{video.title}</h3>
            <p>{video.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Help;