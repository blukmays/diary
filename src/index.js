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
import Header from './routes/Header';
import LoadingComponent from './components/LoadingComponent'
import AuthenticatedComponents from './components/AuthenticatedComponent'
import NoteDetail from './components/NoteDetail'


//create redux store
//reducers -> 'actions-actionType' | applyMiddleware()

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));






//provide the store to react

ReactDOM.render(
       <Provider store={store}>
        <BrowserRouter>
            <LoadingComponent>
            <div>

                <Switch>

                    <Route path="/login" component={Login} exact={true}/>

                    <AuthenticatedComponents>
                        <Header/>
                        <Route path="/:id" component={NoteDetail} exact={true}/>
                        <Route path="/" component={App} exact={true}/>

                    </AuthenticatedComponents>

                </Switch>
            </div>
            </LoadingComponent>
        </BrowserRouter>
    </Provider>,
document.getElementById('root')
);
registerServiceWorker();


