import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route,  Switch } from 'react-router-dom';
import Index from './views/index';
import UserList from './views/access/userList';
import reducers from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
// 利用redux-logger打印日志
import {createLogger} from 'redux-logger'

// 安装redux-devtools-extension的可视化工具。
import { composeWithDevTools } from 'redux-devtools-extension';

// 使用日志打印方法， collapsed让action折叠，看着舒服。
const loggerMiddleware = createLogger({collapsed: true});

const store = createStore(reducers, compose(
    applyMiddleware(thunk, loggerMiddleware),
    composeWithDevTools()
));

ReactDOM.render(
  (<Provider store={store}>
    <BrowserRouter>
        <div className="wrapper">
            <App />
            <Switch>
                <Route path='/home' component={Index} />
                <Route path="/userList" component={UserList} />
            </Switch>
        </div>
    </BrowserRouter>
  </Provider>),
  document.getElementById('root') as HTMLElement
);

// 此处accepts的参数是reducers的存放路径，require()内的路径为执行combineReducers()的文件
if(module.hot) {    
    module.hot.accept("./reducers/", () => {        
        const nextRootReducer = require('./reducers/index').default;        
        store.replaceReducer(nextRootReducer);   
    })
}


registerServiceWorker();
