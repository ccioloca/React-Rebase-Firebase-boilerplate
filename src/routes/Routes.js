import React from 'react'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'
import App from '../ui/layouts/App'
import Index from "../ui/pages/Index"
import Test from "../ui/pages/Test"
import Login from "../ui/pages/Login"
import Logout from '../ui/pages/Logout'
import requireAuth from '../utils/authenticated'

const Routes =  (props) => {
    return (
        <Router history={browserHistory}>
          <Route path='/' component={App}>
            <IndexRoute component={Test} />
            <Route path="login" component={Login} />
            <Route path="logout" component={Logout} />
            <Route path="loggedin" component={Index} onEnter={requireAuth} />
            <Route path="*" component={Test}/>
          </Route>
        </Router>
    )
}

export default Routes
