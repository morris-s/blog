import React from "react";
import "./App.css";
import Homepage from "./Homepage";
import BlogPost from "./BlogPost";
import About from "./About";


import { HashRouter as Router, Switch, Route } from "react-router-dom";

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
              <BlogPost url={window.location.hash} />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route>
              "404 -- not found"
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
