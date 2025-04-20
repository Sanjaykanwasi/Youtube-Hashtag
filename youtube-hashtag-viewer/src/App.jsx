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
