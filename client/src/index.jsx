import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./components/App/App";
import NotFound from "./components/App/NotFound";
import Home from "./components/Home/Home";
import HelloWorld from "./components/HelloWorld/HelloWorld";
import "./styles/styles.scss";

import thunk from 'redux-thunk'
import reducers from './reducers'
import { Provider } from 'react-redux'

import { createStore, applyMiddleware, compose } from 'redux'

const composeEnhancers =  compose
const middleware = composeEnhancers(applyMiddleware(thunk))
const store = createStore(reducers, middleware)

render(
  <Provider store={store}>
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/helloworld" component={HelloWorld} />
          <Route component={NotFound} />
        </Switch>
      </App>
    </Router>
  </Provider>
  ,
  // eslint-disable-next-line no-undef
  document.getElementById("app")
);
