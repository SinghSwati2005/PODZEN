import React from 'react';
import ReactPlayer from 'react-player'; // Import react-player package

const PodcastPlayer = ({ videoId }) => {
  return (
    <div className="container mx-auto p-6 bg-gray-900 text-white min-h-screen">
      {/* Title or any additional podcast info can be added here */}
      <h1 className="text-4xl font-bold text-center mb-8">Podcast Player</h1>

      {/* Embed the YouTube video using ReactPlayer */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`} // YouTube video URL
          controls={true} // Show player controls
          width="100%" // Responsive width
          height="500px" // Fixed height for the player
        />
      </div>
    </div>
  );
};

export default PodcastPlayer;
