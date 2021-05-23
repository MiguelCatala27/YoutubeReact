import React from "react";
import VideoResults from "./VideoResults";
import "./Home.css"

export default function Home({ handleSubmit, handleChange, input, videoShow }) {
  return (
    <div>
      <h1>Search for Videos</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          placeholder="search for video"
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      <VideoResults videoShow={videoShow} />
    </div>
  );
}
