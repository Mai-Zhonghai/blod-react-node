import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route,  Switch } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
      <div>
          <Switch>
              <Route path='/' component={App} />
          </Switch>
      </div>
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
