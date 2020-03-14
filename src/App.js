import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import backgroundImage from "./assets/images/background.jpeg";
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import Character from "./components/Character";

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
