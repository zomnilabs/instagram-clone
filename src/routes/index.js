import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Users from "../pages/Users";
import NotFound from "../pages/NotFound";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/users/" component={Users} />
        <Route path="/*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
