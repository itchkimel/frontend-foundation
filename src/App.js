import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import RequestForm from "./components/RequestForm";
import RequestList from "./components/RequestList";
import "./App.css";

export default function App() {
  const [user, setUser] = useState({requests: []});
  const [token, setToken] = useState("");
  const [class_name, setClassName] = useState("");
  const history = useHistory();
  
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
      .then(handleResponse)
    }
  }, [])
  
  function handleResponse(data) {
    if (data.error) {
      alert(data.error)
    } else {
      const { user, token, class_name } = data
      history.push("/request-form");
      // save that user in state
      setUser(user)
      // save that token in state
      localStorage.setItem("token", token)
      setToken(token)
      // save that className in state
      setClassName(class_name)
    }
  }
  
  function handleLogout() {
    // clear the token
    localStorage.removeItem("token")
    setToken("")
    // clear the use
    setUser({requests: []});
    setClassName("")
    history.push("/")
  }

  function handleRequest(req) {
    // copying state then 
  let copyOfUser = {...user, requests: [...user.requests, req]}
  setUser(copyOfUser)
  }
  
  return (
    <>
      <Route
        render={(routerProps) => (
          <Navbar
            routerProps={routerProps}
            token={token}
            handleLogout={handleLogout}
          />
        )}
      />

      <Switch>
        <Route
          exact path="/login"
          render={(routerProps) => <Login handleResponse={handleResponse} />}
        />

        <Route
          exact path="/signup"
          render={(routerProps) => <Signup handleResponse={handleResponse} />}
        />

        <Route
          exact path="/request-form"
          render={(routerProps) => <RequestForm token={token} handleRequest={handleRequest} />}
        />

        <Route
          exact path="/request-list"
          render={(routerProps) => <RequestList {...user} token={token} />}
        />

        <Route
          path="/"
          render={(routerProps) => <Home setToken={setToken} />}
        />

        <Route>
          <div>404 No matching URL</div>
        </Route>
      </Switch>
    </>
  );
}
