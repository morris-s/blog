import React from "react";
import "./App.css";
import Homepage from "./Homepage";
import BlogPost from ".//BlogPost";
import About from ".//About";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/blog">
              <BlogPost />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
