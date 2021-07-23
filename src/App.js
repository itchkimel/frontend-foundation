import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import Signup from "./components/Signup";
import "./App.css";

export default function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  
  // console.log(user);
  // console.log(token);

  // auto-login feature!
  useEffect(() => {
    // check if the user has already logged in
    const token = localStorage.getItem("token");
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
          // save that token in state
          setToken(token);
        });
    }
  }, []);

  function handleLogout() {
    // clear the token
    localStorage.removeItem("token");
    setToken(null);
    // clear the user
    setUser(null);
  }

  return (
    <>
      <Router>
        <Route render={(routerProps) => <Navbar routerProps={routerProps} token={token} handleLogout={handleLogout}  />} />
        <Switch>
          <Route exact path="/login"
            render={(routerProps) => <Login setUser={setUser} setToken={setToken} />}
          />

          <Route exact path="/signup"
            render={(routerProps) => <Signup setUser={setUser} />}
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

