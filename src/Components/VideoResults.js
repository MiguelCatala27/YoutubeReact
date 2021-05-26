import { Link } from "react-router-dom";
import "./VideoResults.css";
require("dotenv").config();

const VideoResults = ({ videoShow }) => {
  return (
    <div className="videos">
      <ul className="list">
        {videoShow.map((video) => (
          <Link className="Link" to={`/videos/${video.id.videoId}`}>
            <li key={video.id.videoId}>
              <div className="fix_title">
                <h3 className="video_title">{video.snippet.title}</h3>
              </div>
              <img
                className="thumbnails"
                src={video.snippet.thumbnails.high.url}
                alt=""
              />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default VideoResults;
