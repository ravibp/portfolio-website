import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import "assets/scss/material-kit-react.scss?v=1.7.0";
import "mdbreact/dist/css/mdb.css";

// route pages
import LandingPage from "myComponents/LandingPage.jsx";
import ResumeBuild from "myComponents/ResumeBuild.jsx";

console.log(
  "basename url sad hash",
  process.env.PUBLIC_URL,
  window.location,
  window.history
);
ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route exact path={"/"} component={LandingPage} />
      <Route path={"/resume"} component={ResumeBuild} />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
