import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Your YouTube Data API Key
const API_KEY = 'AIzaSyD5HfY6QUsjo0a-kGXHxxgHDQ4awKk2hxA'; // Replace with your actual API key

// Function to fetch all podcasts from YouTube using the API URL
const fetchPodcasts = async (pageToken = '') => {
  try {
    // Search query for all podcasts
    const query = 'student podcasts|ted talks|student study tips|career development|mental health for students';

    // Send a request to the YouTube API with the updated query
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&type=video&key=${API_KEY}&pageToken=${pageToken}`
    );

    return {
      items: response.data.items,
      nextPageToken: response.data.nextPageToken,  // Get nextPageToken for pagination
      prevPageToken: response.data.prevPageToken,  // Get prevPageToken if you want to implement a "previous" button
    };
  } catch (error) {
    console.error('Error fetching podcasts:', error);
    return { items: [], nextPageToken: null, prevPageToken: null };
  }
};

const AllPodcasts = () => {
  const [podcasts, setPodcasts] = useState([]);  // To hold the list of podcasts
  const [nextPageToken, setNextPageToken] = useState(null); // Token for the next page
  const [prevPageToken, setPrevPageToken] = useState(null); // Token for the previous page
  const [loading, setLoading] = useState(false);  // Loading state for fetching data

  // Fetch all podcasts when the component mounts
  useEffect(() => {
    const getPodcasts = async () => {
      setLoading(true);
      const fetchedPodcasts = await fetchPodcasts();
      setPodcasts(fetchedPodcasts.items);
      setNextPageToken(fetchedPodcasts.nextPageToken);  // Store next page token
      setPrevPageToken(fetchedPodcasts.prevPageToken);  // Store previous page token
      setLoading(false);
    };

    getPodcasts();
  }, []);

  // Load more podcasts
  const loadMorePodcasts = async () => {
    setLoading(true);
    const fetchedPodcasts = await fetchPodcasts(nextPageToken);
    setPodcasts([...podcasts, ...fetchedPodcasts.items]);
    setNextPageToken(fetchedPodcasts.nextPageToken);
    setPrevPageToken(fetchedPodcasts.prevPageToken);
    setLoading(false);
  };

  // Load previous podcasts
  const loadPreviousPodcasts = async () => {
    if (!prevPageToken) return;
    setLoading(true);
    const fetchedPodcasts = await fetchPodcasts(prevPageToken);
    setPodcasts(fetchedPodcasts.items);
    setNextPageToken(fetchedPodcasts.nextPageToken);
    setPrevPageToken(fetchedPodcasts.prevPageToken);
    setLoading(false);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-12 text-center">All Student Podcasts</h1>

      {/* Podcasts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {podcasts.map((podcast) => (
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
        ))}
      </div>

      {/* Loading Indicator */}
      {loading && <p className="text-center text-gray-400">Loading more podcasts...</p>}

      {/* Pagination Controls */}
      <div className="flex justify-between mt-8">
        <button
          onClick={loadPreviousPodcasts}
          disabled={!prevPageToken}
          className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={loadMorePodcasts}
          disabled={!nextPageToken}
          className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition disabled:opacity-50"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default AllPodcasts;
