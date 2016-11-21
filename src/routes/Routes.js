import React from 'react'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'

import App from '../ui/layouts/App'
import Index from "../ui/pages/Index"
import Login from "../ui/pages/Login"
import Dashboard from '../ui/pages/Dashboard'
import Register from '../ui/pages/Register'

import requireAuth from '../utils/authenticated'

const Routes =  (props) => {
    return (
        <Router history={browserHistory}>
            <Route path='/' component={App} name="App" >
                <IndexRoute component={Index} name="Home" />
                <Route path="login" component={Login} name="Login" />
                <Route path="register" component={Register} name="Register" />
                <Route path="dashboard" component={Dashboard} onEnter={requireAuth} name="Dashboard"/>
                <Route path="*" component={Index} name="404: No Match for route"/>
            </Route>
        </Router>
    )
}

export default Routes
