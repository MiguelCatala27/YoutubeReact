import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Home.css";
import SearchIcon from "@material-ui/icons/Search";
require("dotenv").config();

const Home = () => {
  const [videoShow, setvideoShow] = useState([]);
  const [input, setInput] = useState("");

  const fetchVideos = async () => {
    const res = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${input}&type=video&key=${process.env.REACT_APP_API_KEY}`
    );
    debugger;
    setvideoShow(res.data.items);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchVideos();
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="home">
      <h1>Search for Videos</h1>
        <form className="input__icon" onSubmit={handleSubmit}>
          <input
            value={input}
            placeholder="Search for video"
            onChange={handleChange}
          />
          {/* <button type="submit"></button> */}
          <SearchIcon onClick={handleSubmit} className="inputButton" />
        </form>
      <div className="videos">
        <ul className="video__list">
          {videoShow.map((video) => (
            <Link className="Link" to={`/videos/${video.id.videoId}`}>
              <li key={video.id.videoId}>
                <img
                  className="thumbnails"
                  //   width={video.snippet.thumbnails.high.width}
                  //   height={video.snippet.thumbnails.high.height}
                  src={video.snippet.thumbnails.high.url}
                />
                <h4 className="video_title">{video.snippet.title}</h4>
                <p>{video.snippet.channelTitle}</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
