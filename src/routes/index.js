import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainLayout from "../App";

import Home from "../pages/Home";
import Users from "../pages/Users";
import NotFound from "../pages/NotFound";

function AppRouter() {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/users/" component={Users} />
          <Route path="/*" component={NotFound} />
        </Switch>
      </MainLayout>
    </Router>
  );
}

export default AppRouter;
