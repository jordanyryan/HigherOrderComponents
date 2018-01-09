import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';
import require_auth from './components/require_authentication';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

import Resources from './components/resources';
import Header from './components/header';

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/resources" component={require_auth(Resources)}/>
          <Route path="/" component={App}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);
