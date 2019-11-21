import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "assets/scss/material-kit-react.scss?v=1.7.0";
import "mdbreact/dist/css/mdb.css";

// route pages
import LandingPage from "myComponents/LandingPage.jsx";
import ResumeBuild from "myComponents/ResumeBuild.jsx";

console.log("basename url no hash", process.env.PUBLIC_URL);

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/resume" component={ResumeBuild} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
