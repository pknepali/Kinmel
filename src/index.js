import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Header from './components/Header/Header';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';
import PostsIndex from './components/posts_index';


ReactDOM.render(
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/posts/new" component={PostsNew} />
            <Route path="/posts/:id" component={PostsShow} />
            <Route path="/" component={PostsIndex} />
          </Switch>
        </div>
      </BrowserRouter>,
    document.querySelector("#root")
  );registerServiceWorker();
