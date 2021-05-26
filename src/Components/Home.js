import React from "react";
import VideoResults from "./VideoResults";
import "./Home.css";
import SearchIcon from "@material-ui/icons/Search";

export default function Home({ handleSubmit, handleChange, input, videoShow }) {
  return (
    <div className="home">
      <h1>Search for Videos</h1>
      <form className="icon" onSubmit={handleSubmit}>
        <div className="header__input">
          <input
            type="text"
            value={input}
            placeholder="Search for video"
            onChange={handleChange}
          />
          {/* <button type="submit">Search</button> */}
          <SearchIcon onClick={handleSubmit} className="icon_button" />
        </div>
      </form>
      <VideoResults videoShow={videoShow} />
    </div>
  );
}
