import base from '../ui/rebase.config.js'

export const requireAuth = (nextState, replace, cb) => {
  const unsubscribeToListener = base.onAuth(user => {
    if (!user) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      });
    }
    unsubscribeToListener();
    cb();
  });
}
