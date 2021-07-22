import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  
  console.log(user);
  console.log(localStorage.token);

  // auto-login feature!
  useEffect(() => {
    // check if the user has already logged in
    const token = localStorage.token;
    if (token) {
      // Authorization: Bearer token
      fetch(`http://localhost:3000/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((r) => r.json())
        .then((user) => {
          // save that user in state
          setUser(user);
        });
    }
  }, []);

  return (
    <>
      <Router>
        <Route render={(routerProps) => <Navbar routerProps={routerProps} />} />
        <Switch>
          <Route exact path="/login"
            render={(routerProps) => <Login setUser={setUser} />}
          />

          <Route exact path="/">
            <Home />
          </Route>

          <Route>
            <div>404 No matching URL</div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
