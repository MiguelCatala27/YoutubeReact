import { useState } from "react";
import "./DisplayVideo.css";

const VideoPage = (props) => {
  const [userName, setUserName] = useState("");
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleComment = (e) => {
    setComment(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setCommentList((prevComment) => [...prevComment, { [userName]: comment }]);
    setUserName("");
    setComment("");
  };

  return (
    <section className="DisplayVideo">
      <button onClick={props.history.goBack}>Go Back</button>
      
      {
        <iframe
          width="420"
          height="315"
          src={`https://www.youtube.com/embed/${props.match.params.id}`}
        ></iframe>
      }
      <form onSubmit={handleSubmit}>
        <label className="Label">
          Name:
          <input value={userName} onChange={handleUserName} />
        </label>
        <label>
          Comment:
          <input value={comment} onChange={handleComment} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {commentList.map((commentObj) => {
        return (
          <div>
            <h3>{Object.keys(commentObj)}</h3>
            <p>{Object.values(commentObj)}</p>
          </div>
        );
      })}
    </section>
  );
};
export default VideoPage;
