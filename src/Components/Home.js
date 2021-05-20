import { Component } from "react";
import React, { useState, useEffect } from "react";
import axios from "axios";
require("dotenv").config()

const Home = () => {
  const [videoShow, setvideoShow] = useState([]);
  const [userInput, setuserInput] = useState("");

  const fetchVideos = async (e) => {
      e.preventDefault()
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&part=snippet&type=video&q=${userInput}`
      );
      debugger;
    } catch (error) {console.log(error)}
    
  };

//   useEffect(() => {
//     fetchVideos();
//   });

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
    </div>
  );
};

export default Home;
