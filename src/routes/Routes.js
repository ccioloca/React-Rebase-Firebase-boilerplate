import React from 'react'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'

import App from '../ui/layouts/App'
import Index from "../ui/pages/Index"
import Login from "../ui/pages/Login"
import Logout from '../ui/pages/Logout'
import Dashboard from '../ui/pages/Dashboard'
import Register from '../ui/pages/Register'

import requireAuth from '../utils/authenticated'

const Routes =  (props) => {
    return (
        <Router history={browserHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={Index} />
                <Route path="login" component={Login} />
                <Route path="logout" component={Logout} />
                <Route path="register" component={Register} />
                <Route path="dashboard" component={Dashboard} onEnter={requireAuth} />
                <Route path="*" component={Index}/>
            </Route>
        </Router>
    )
}

export default Routes
