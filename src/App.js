import React, { Component } from "react";
import "./App.scss";
import HomePage from "./components/HomePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavigationPage from "./components/NavigationPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/nav" component={NavigationPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
