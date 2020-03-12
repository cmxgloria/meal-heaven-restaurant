import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Recipe from "./Recipe";
import Recipes from "./Recipes";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Recipes} exact />
      <Route path="/recipe/:id" component={Recipe} />
    </Switch>
  </BrowserRouter>
);
export default Router;
