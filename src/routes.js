import React from 'react'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'

import App from './ui/App'
import Index from "./ui/pages/Index"
import Login from "./ui/pages/Login"
import Dashboard from './ui/pages/Dashboard'
import Profile from './ui/pages/Profile'
import Notes from './ui/pages/Notes'

import { requireAuth } from './utils/authenticated'

const Routes = (props) => {
    return (
        <Router history={browserHistory}>
            <Route path='/' component={App} name="App" >
                <IndexRoute component={Index} name="Home" />
                <Route path="login" component={Login} name="Login" />
                <Route path="dashboard" component={Dashboard} onEnter={requireAuth} name="Dashboard"/>
                <Route path="profile" component={Profile} onEnter={requireAuth} name="Profile"/>
                <Route path="notes" component={Notes} onEnter={requireAuth} name="Notes"/>
                <Route path="*" component={Index} name="404: No Match for route" />
            </Route>
        </Router>
    )
}

export default Routes
