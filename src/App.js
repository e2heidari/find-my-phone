import "./App.css";
import Smartphones from "./components/Smartphones/Smartphones";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Result from "./components/Result";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="headerContainer">
            <li>
              <Link to="/smartphones">SMARTPHONES</Link>
            </li>
            <li>
              <Link to="/cameras">CAMERAS</Link>
            </li>
            <li>
              <Link to="/speakers">SPEAKERS</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/cameras">
            <Cameras />
          </Route>
          <Route path="/speakers">
            <Speakers />
          </Route>
          <Route path="/smartphones">
            <Smartphones />
          </Route>
          <Route path="/result">
            <Result />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Cameras() {
  return <h2>Cameras</h2>;
}

function Speakers() {
  return <h2>Speakers</h2>;
}
