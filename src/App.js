import "./App.css";
import NavBar from "./Components/NavBar";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import DisplayVideo from "./Components/DisplayVideo"
import About from "./Components/About";


function App() {
  return (
    <div className="App">
      <main>
        <NavBar />
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route path={"/videos/:id"} component={DisplayVideo} />
          <Route path={"/about"} component={About} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
