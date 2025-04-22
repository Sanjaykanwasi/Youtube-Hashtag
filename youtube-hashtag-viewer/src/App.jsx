import { useState } from "react";
import VideoFeed from "./VideoFeed";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [hashtag, setHashtag] = useState("lifeinsoulcity");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 px-6 max-w-4xl mx-auto text-white">
        <h1 className="text-3xl font-bold mb-4 text-center">
          YouTube Hashtag Viewer
        </h1>

        <input
          type="text"
          value={hashtag}
          onChange={(e) => setHashtag(e.target.value)}
          className="border px-4 py-2 w-full rounded mb-6 text-black"
          placeholder="Enter hashtag without #"
        />

        <VideoFeed hashtag={hashtag} />
      </main>
      <Footer />
    </div>
  );
}

export default App;

// This code is a React component that serves as the main entry point for a YouTube hashtag viewer application. It imports necessary components and sets up the main structure of the app, including a navigation bar, a footer, and a video feed section. The user can input a hashtag to fetch and display related YouTube videos. The component uses state management to handle the current hashtag input by the user.
// The `App` component is styled using Tailwind CSS classes for a modern and responsive design. The `VideoFeed` component is responsible for fetching and displaying videos based on the provided hashtag. The application is designed to be user-friendly, allowing users to easily search for and view videos related to specific hashtags on YouTube.
