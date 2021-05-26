import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./DisplayVideo.css";

const VideoPage = (props) => {
  const [userName, setUserName] = useState("");
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);
  let history = useHistory();
  const { id, title } = useParams();

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

  const GoBack = () => {
    debugger;
    history.push("/");
  };

  return (
    <section className="DisplayVideo">
      <div id="go-back-button">
        <button onClick={GoBack}>Back</button>
      </div>

      {
        <iframe
          title={`${title}`}
          width="420"
          height="315"
          src={`https://www.youtube.com/embed/${id}`}
        ></iframe>
      }
      <form onSubmit={handleSubmit}>
        <label className="Label">
          {/* Name: */}
          <input
            value={userName}
            className="comment"
            onChange={handleUserName}
            placeholder="Name"
            required
          />
        </label>
        <br></br>
        <hr></hr>
        <label className="Label">
          {/* Comment: */}
          <input
            value={comment}
            className="comment1"
            onChange={handleComment}
            placeholder="Comment"
            required
          />
        </label>
        <div id="submit-button">
          <button type="submit">Submit</button>
        </div>
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
