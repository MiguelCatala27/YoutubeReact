import "./App.css";
import NavBar from "./Components/NavBar";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import DisplayVideo from "./Components/DisplayVideo";
import About from "./Components/About";
import VideoResults from "./Components/VideoResults";
import { useState } from "react";
import axios from "axios";

function App() {
  const [videoShow, setvideoShow] = useState([]);
  const [input, setInput] = useState("");

  const fetchVideos = async () => {
    try {
      const res = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${input}&type=video&key=${process.env.REACT_APP_API_KEY}`
      );
      setvideoShow(res.data.items);
    } catch (err) {
      console.log(err);
    }
    debugger;
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
    <div className="App">
      <main>
        <NavBar />
        <Switch>
          <Route path={"/videos/:id"}>
            <DisplayVideo />
          </Route>
          <Route path={"/videos"} component={VideoResults} />
          <Route path={"/about"} component={About} />
          <Route exact path={"/"}>
            <Home
              handleSubmit={handleSubmit}
              input={input}
              handleChange={handleChange}
              videoShow={videoShow}
            />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
