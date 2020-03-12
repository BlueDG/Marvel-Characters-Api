import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import backgroundImage from "./background/pattern.jpeg";
import NavBar from "./components/layout/NavBar";
import Dashboard from "./components/layout/Dashboard";
import Character from "./components/character/Character";

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{ background: `url(${backgroundImage})` }}>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/character:id" component={Character} />
            <Dashboard />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
