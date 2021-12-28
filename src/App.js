import Smartphones from "./components/Smartphones/Smartphones";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Result from "./components/Result";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import { StyledMenu, Nav, RouterLink, SeaarchContainer } from "./styled";
import Burger from "./components/Burger/Burger";
import React, { useState, useEffect } from "react";
import Home from "./components/Home/Home";
import axios from "axios";
import Searchbar from "./components/searchbar/Searchbar";
import Compare from "./components/Compare";

export default function App() {
  const [open, setOpen] = useState(false);
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    const callContentful = async () => {
      const result = await axios.get(
        process.env.REACT_APP_CONTENTFUL_GRAPHQL_URL +
          "?access_token=" +
          process.env.REACT_APP_ACCESS_TOKEN
      );
      console.log(result);
      if (result.status === 200) {
        setPhones(
          result.data.items.map((item) => {
            return {
              id: item.sys.id,
              brandName: item.fields.brandName,
              priceRange: item.fields.priceRange,
              os: item.fields.os,
              cameraDayScore: item.fields.cameraDayScore,
              cameraNightScore: item.fields.cameraNightScore,
              cameraVideoScore: item.fields.cameraVideoScore,
              cameraZoomScore: item.fields.cameraZoomScore,
              cameraSelfieScore: item.fields.cameraSelfieScore,
              batteryScore: item.fields.batteryScore,
              audioPlaybackQualityScore: item.fields.audioPlaybackQualityScore,
              audioRecordingQualityScore:
                item.fields.audioRecordingQualityScore,
              displayScore: item.fields.displayScore,
              performanceScore: item.fields.performanceScore,
              image: result.data.includes.Asset.find(
                (object) => item.fields.image.sys.id === object.sys.id
              ).fields.file.url,
            };
          })
        );
      } else {
        console.log("Error in phones request");
      }
    };
    callContentful();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Burger open={open} setOpen={setOpen} />
        <Nav>
          <SeaarchContainer>
            <Searchbar phones={phones} />
          </SeaarchContainer>
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
              <Smartphones phones={phones} />
            </Route>
            <Route path="/result">
              <Result phones={phones} />
            </Route>
            <Route path="/compare">
              <Compare phones={phones} />
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
