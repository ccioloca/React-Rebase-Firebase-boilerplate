import base from '../rebase.config.js'

const requireAuth = (nextState, replace) => {

    if(null === base.auth().currentUser || false === base.auth().currentUser.emailVerified ) {
        console.log('I havent a user?')
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        })
    }

}

export default requireAuth
