import React, {Component} from 'react';
import UsersWithReduxThunk from "./redux-thunk/UsersWithReduxThunk";
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import Home from "./home/Home";
import UsersWithReduxSaga from "./redux-saga/UsersWithReduxSaga";
import UsersWithSuspense from "./suspense/UsersWithSuspense";
import UsersWithHooks from "./hooks/UsersWithHooks";

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <div>
                            <Link to='/'>Home</Link>
                            |
                            <Link to='/redux-thunk'>Redux-Thunk</Link>
                            |
                            <Link to='/redux-saga'>Redux-Saga</Link>
                            |
                            <Link to='/suspense'>Suspense</Link>
                            |
                            <Link to='/hooks'>Hooks</Link>
                        </div>
                        <Switch>
                            <Route path="/redux-thunk" component={UsersWithReduxThunk}/>
                            <Route path="/redux-saga" component={UsersWithReduxSaga}/>
                            <Route path="/suspense" component={UsersWithSuspense}/>
                            <Route path="/hooks" component={UsersWithHooks}/>
                            <Route path="/" component={Home}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
