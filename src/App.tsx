import React from "react";
import "./App.css";
import Manage from "./pages/Manage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path={"/manage"} component={Manage} />
      </Switch>
    </Router>
  );
}

export default App;
