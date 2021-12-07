import Smartphones from "./components/Smartphones/Smartphones";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Result from "./components/Result";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import { StyledMenu, Nav, RouterLink, SearchBox } from "./styled";
import Burger from "./components/Burger/Burger";
import React, { useState } from "react";
import Home from "./components/Home/Home";

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Burger open={open} setOpen={setOpen} />
        <Nav>
          <SearchBox>
            <input type="text" placeholder="Search..." />
            <button />
          </SearchBox>
          <StyledMenu open={open}>
            <li>
              <RouterLink to="/" onClick={() => setOpen(!open)}>
                HOME
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/smartphones" onClick={() => setOpen(!open)}>
                SMARTPHONES
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/cameras" onClick={() => setOpen(!open)}>
                CAMERAS
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/speakers" onClick={() => setOpen(!open)}>
                SPEAKERS
              </RouterLink>
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
        </Nav>
      </Router>
    </ThemeProvider>
  );
}

function Cameras() {
  return (
    <h1
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      COMING SOON...
    </h1>
  );
}

function Speakers() {
  return (
    <h1
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      COMING SOON...
    </h1>
  );
}
