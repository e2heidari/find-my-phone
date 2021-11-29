import Smartphones from "./components/Smartphones/Smartphones";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Result from "./components/Result";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import { StyledMenu } from "./styled";
import Burger from "./components/Burger/Burger";
import React, { useState } from "react";
import Home from "./components/Home/Home";

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Burger open={open} setOpen={setOpen} />
        <GlobalStyles />
        <div>
          <StyledMenu open={open}>
            <li>
              <Link
                to="/"
                onClick={() => setOpen(!open)}
                style={{ textDecoration: "none" }}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/smartphones"
                onClick={() => setOpen(!open)}
                style={{ textDecoration: "none" }}
              >
                SMARTPHONES
              </Link>
            </li>
            <li>
              <Link
                to="/cameras"
                onClick={() => setOpen(!open)}
                style={{ textDecoration: "none" }}
              >
                CAMERAS
              </Link>
            </li>
            <li>
              <Link
                to="/speakers"
                onClick={() => setOpen(!open)}
                style={{ textDecoration: "none" }}
              >
                SPEAKERS
              </Link>
            </li>
          </StyledMenu>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
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
    </ThemeProvider>
  );
}

function Cameras() {
  return <h2>Cameras</h2>;
}

function Speakers() {
  return <h2>Speakers</h2>;
}
