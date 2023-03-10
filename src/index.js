import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import Market from "layouts/Market.js";

import "assets/css/material-dashboard-react.css?v=1.10.0";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/market" component={Market} />
      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
