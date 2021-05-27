import "./App.css";
import { useEffect } from "react"
import NavBar from "./Components/NavBar";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import DisplayVideo from "./Components/DisplayVideo";
import About from "./Components/About";
import VideoResults from "./Components/VideoResults";
import { useState } from "react";
import axios from "axios";

function App() {
  const [videoShow, setVideoShow] = useState([]);
  const [input, setInput] = useState("");

useEffect(() => {
  document.title = "MCM Youtube"

  
}, [])

  const fetchVideos = async () => {
    try {
      const res = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${input}&type=video&key=${process.env.REACT_APP_API_KEY}`
      );
      setVideoShow(res.data.items);
    } catch (err) {
      console.log(err);
    }
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
    <div className="app">
      <main>
        <NavBar videoShow={videoShow} setVideoShow={setVideoShow} />
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
