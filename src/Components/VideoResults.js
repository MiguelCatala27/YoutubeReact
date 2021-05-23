import { Link } from "react-router-dom";
import "./VideoResults.css";
require("dotenv").config();

const VideoResults = ({ videoShow }) => {
  return (
    <div>
      <ul className="List">
        {videoShow.map((video) => (
          <Link className="Link" to={`/videos/${video.id.videoId}`}>
            <li key={video.id.videoId}>
              <h3>{video.snippet.title}</h3>
              <img
                className="thumbnails"
                width={video.snippet.thumbnails.high.width}
                height={video.snippet.thumbnails.high.height}
                src={video.snippet.thumbnails.high.url}
              />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default VideoResults;
