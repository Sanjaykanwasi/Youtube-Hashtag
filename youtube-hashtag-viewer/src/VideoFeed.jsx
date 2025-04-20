import axios from "axios";
import { useEffect, useState } from "react";

function VideoFeed({ hashtag }) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = "AIzaSyBb_DYm93UIowuujpLB_Tq-0zDrqIb9fMs";

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          "https://www.googleapis.com/youtube/v3/search",
          {
            params: {
              part: "snippet",
              q: `#${hashtag}`,
              type: "video",
              maxResults: 8,
              key: API_KEY,
            },
          }
        );
        setVideos(res.data.items);
      } catch (err) {
        console.error("Error fetching videos:", err);
      }
      setLoading(false);
    };

    fetchVideos();
  }, [hashtag]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (!videos.length)
    return <p className="text-center text-gray-500">No videos found.</p>;

  return (
    <div className="grid sm:grid-cols-2 gap-6">
      {videos.map((video) => (
        <div key={video.id.videoId} className="rounded shadow p-2 border">
          <iframe
            className="w-full h-56 mb-2 rounded"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            title={video.snippet.title}
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <h2 className="text-base font-semibold">{video.snippet.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default VideoFeed;
