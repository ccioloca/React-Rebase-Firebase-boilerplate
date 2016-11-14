import base from '../rebase.config.js';

export const isLoggedIn = () => {
    console.log(base.auth().currentUser)
    if (null === base.auth().currentUser || false === base.auth().currentUser.emailVerified ) {
        return false
    }
    return true
}

const requireAuth = (nextState, replace) => {

    if(null === base.auth().currentUser || false === base.auth().currentUser.emailVerified ) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        })
    }

}

export default requireAuth
