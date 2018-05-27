import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducers'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import Login from './components/Login'

//create redux store
//reducers -> 'actions-actionType' | applyMiddleware()

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const Header = () =>(
    <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span className="icon-bar"/>
                    <span className="icon-bar"/>
                    <span className="icon-bar"/>
                </button>

                <Link className="navbar-brand" to ="/">
                Diary2018
                </Link>

            </div>

            <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </div>


        </div>

    </nav>
)




//provide the store to react

ReactDOM.render(
       <Provider store={store}>
        <BrowserRouter>
            <div>
                <Header/>
                <Switch>
                    <Route path="/" component={App} exact={true}/>
                    <Route path="/login" component={Login} exact={true}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
document.getElementById('root')
);
registerServiceWorker();


