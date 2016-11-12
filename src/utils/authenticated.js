import base from '../rebase.config.js';

const requireAuth = (nextState, replace) => {

    if(null === base.auth().currentUser) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        })
    }
    
}

export default requireAuth
