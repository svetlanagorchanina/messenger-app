import React from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import { ChatPage } from "./Chat/Page";

export const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/chats" component={ChatPage} />
      <Route exact path="/chats/:id" component={ChatPage} />
      <Redirect exact to="/chats" />
    </Switch>
  </BrowserRouter>
);
