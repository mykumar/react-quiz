import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Home.js";
import App from "./App.js";
import QuizPage from "./containers/QuizPage";
import AdminPage from "./containers/AdminPage";
import CompletePage from "./containers/CompletePage";

const RootRouter = () => (
  <BrowserRouter>
    <App>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/quiz" component={QuizPage} />
          <Route exact path="/admin" component={AdminPage} />
          <Route exact path="/complete" component={CompletePage} />
        </Switch>
      </div>
    </App>
  </BrowserRouter>
);

export default RootRouter;
