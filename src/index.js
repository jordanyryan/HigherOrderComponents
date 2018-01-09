import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import promise from 'redux-promise';

import Resources from './components/resources';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={App}>
              <Route path="resources" component={Resources} />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);
