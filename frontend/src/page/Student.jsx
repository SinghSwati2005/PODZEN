import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentLife = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch podcasts when the component mounts
  useEffect(() => {
    const fetchPodcasts = async () => {
      setLoading(true);
      try {
        // Search query focused on student life, college experiences, and tips for balancing academics and social life
        const response = await axios.get(
          'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=student life|college life|campus experiences|building friendships|balancing academics and social life&type=video&key=AIzaSyD5HfY6QUsjo0a-kGXHxxgHDQ4awKk2hxA'
        );
        setPodcasts(response.data.items);
      } catch (error) {
        console.error('Error fetching podcasts:', error);
      }
      setLoading(false);
    };

    fetchPodcasts();
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      {/* Heading for Student Life podcasts */}
      <h1 className="text-4xl font-bold mb-12 text-center">Student Life & College Experiences</h1>

      {/* Podcasts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {loading ? (
          <p className="text-center text-gray-400">Loading podcasts...</p>
        ) : (
          podcasts.map((podcast) => (
            <div
              key={podcast.id.videoId}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105"
            >
              <a
                href={`https://www.youtube.com/watch?v=${podcast.id.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={podcast.snippet.thumbnails.medium.url}
                  alt={podcast.snippet.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-2xl font-semibold">{podcast.snippet.title}</h2>
                  <p className="text-gray-400 mt-2">
                    {podcast.snippet.description.length > 120
                      ? podcast.snippet.description.substring(0, 120) + "..."
                      : podcast.snippet.description}
                  </p>
                </div>
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default StudentLife;
