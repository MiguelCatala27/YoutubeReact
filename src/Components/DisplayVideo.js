import { useState } from "react";

const DisplayVideo = (props) => {
 const [videoShow ] = props
  return <section>
 {videoShow.map(video => 
      <iframe width="240" height="135" 
      src={`https://www.youtube.com/embed/${video.id.videoId}`} > 
      </iframe>
 )
 }
  </section>;
};

export default DisplayVideo;
