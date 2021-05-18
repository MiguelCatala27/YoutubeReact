import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <main>
        <NavBar />
        <Switch>
          <Route exact path={"/"} component={Home} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
