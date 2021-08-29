import React from "react";
import "./App.css";
import Manage from "./pages/Manage/Manage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Box from "@material-ui/core/Box";

function App() {
  return (
    <Router>
      <Box mt={"1rem"} p={"3rem"}>
        <Switch>
          <Route path={"/manage"} component={Manage} />
        </Switch>
      </Box>
    </Router>
  );
}

export default App;
