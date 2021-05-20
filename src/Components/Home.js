import React, { useState } from "react";
import axios from "axios";
require("dotenv").config()

const Home = () => {
  const [videoShow, setvideoShow] = useState([]);
  const [userInput, setuserInput] = useState("");

  const fetchVideos = async (e) => {
      e.preventDefault()
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&part=snippet&type=video&q=${userInput}&maxResults=50`
      );
      debugger;
      const items = res.data.items;
      setvideoShow(items)
    } catch (error) {
      console.log(error)
      setvideoShow([])
    }
    setuserInput("")
  };

  const handleInput = (e) => {
    setuserInput(e.target.value);
  };

  return (
    <div>
      <h1>Search for some videos</h1>
      <form onSubmit={fetchVideos}>
        <input
          type="text"
          placeholder="search for a video"
          id="video"
          value={userInput}
          onChange={handleInput}
        />
        <button type="submit" value="search">Search</button>
      </form>
      <ul>
          {videoShow.map((video) => (
            <li key={video.id.videoId}>
              <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`}>
                <p>
                  <img
                    width="100px"
                    src={video.snippet.thumbnails.medium.url}
                    alt=""
                  />
                </p>
                <h3>{video.snippet.title}</h3>
              </a>
            </li>
          ))}
        </ul>
    </div>
  );
};

export default Home;
