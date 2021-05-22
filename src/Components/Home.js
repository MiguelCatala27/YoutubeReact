import React, { useState } from "react";
import "./Home.css"
import { Link } from "react-router-dom"
import axios from "axios";
import DisplayVideo from "./DisplayVideo";
require("dotenv").config();

const Home = () => {
  const [videoShow, setvideoShow] = useState([]);
  const [userInput, setuserInput] = useState("");
  // const [singleVideo, setSingleVideo] = useState("")

  const fetchVideos = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&part=snippet&type=video&q=${userInput}&maxResults=10`
      );
      debugger;
      const items = res.data.items;
      setvideoShow(items);
    } catch (error) {
      console.log(error);
      setvideoShow([]);
    }
    setuserInput("");
  };

  const handleInput = (e) => {
    setuserInput(e.target.value);
  };

  // const handleClick = (e) => {
  //   setSingleVideo(e.target.value)
  //   debugger;
  // }

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
        <button type="submit" value="search">
          Search
        </button>
      </form>
      <ul className="videoList">
        {videoShow.map((video, i) => (
          <li key={video.id.videoId}>
             <Link to={`/videos/${video.id.videoId}` }>
               <DisplayVideo videoShow={videoShow}/>
              {/* <h3>{video.snippet.title}</h3> */}
              {/* <iframe */}
              {/* width="306" height="" src=
              {`https://www.youtube.com/embed/${video.id.videoId}`} */}
              <p>
                <img
                  width="100px"
                  // height="200px"
                  src={video.snippet.thumbnails.medium.url}
                  alt=""
                />
              </p>
              <h3>{video.snippet.title}</h3>
              {/* </iframe> */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

// added emebeded video on home page
// need to a tag with for the title
// need to load video on another page and add a comment form component
// css
