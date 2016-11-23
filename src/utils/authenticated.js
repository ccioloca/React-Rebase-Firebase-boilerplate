import base from '../rebase.config.js'

export const requireAuth = (nextState, replace) => {

    if(null === base.auth().currentUser || false === base.auth().currentUser.emailVerified ) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        })
    }

}
