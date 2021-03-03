import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Login from "../Login/Login";
import HomePage from "../HomePage/index"

class CustomRoute extends Component {
    render() {
        return (
            <div>
                <Router basename="/template">
                    <Switch>
                        <PrivateRoute path="/home" component={HomePage} />
                        <Route path="/" component={Login} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default CustomRoute;

