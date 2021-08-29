import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Property from "./pages/Manage/Property/Property";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={"/manage/property"} component={Property} />
        <Route
          path={"/manage"}
          render={() => <Redirect to={"/manage/property"} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
