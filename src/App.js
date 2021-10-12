import Phone from "./components/Phone"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Smartphones</Link>
            </li>
            <li>
              <Link to="/cameras">Cameras</Link>
            </li>
            <li>
              <Link to="/speakers">Speakers</Link>
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
          <Route path="/">
            <Phone />
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
