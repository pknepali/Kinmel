import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";

import Header from "./components/Header";
import PostsIndex from "./components/posts_index";
import PostsNew from "./components/posts_new";
import PostsShow from "./components/posts_show";


ReactDOM.render(
    <BrowserRouter>
      <div>
          <Header />
          <Route path="/posts/new" component={PostsIndex} />
          <Route path="/posts/:id" component={PostsShow} />
          <Route path="/new" component={PostsNew} />
          <Route path="/index" component={PostsIndex} />
          <Route path="/show" component={PostsShow} />
          <Route path="/" component={PostsIndex} />
      </div>
    </BrowserRouter>,
  document.querySelector(".content")
);
