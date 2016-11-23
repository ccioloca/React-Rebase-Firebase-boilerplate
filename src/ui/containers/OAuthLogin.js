import React, { Component } from 'react';
import base from '../../rebase.config.js'
import { browserHistory } from 'react-router'
import LoadingAnimation from '../presentational/LoadingAnimation'

class OAuthLogin extends Component {

    componentWillMount() {

        const onRedirectBack = function(error, authData){
            if(error) console.log(error)
            if(authData.user) browserHistory.push('/dashboard')
        }

        base.authGetOAuthRedirectResult(onRedirectBack)

        this.authListener = base.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser !== null && firebaseUser.emailVerified === true) {
                browserHistory.push('/dashboard')
            } else {
                this.props.switchLoadingState()
            }
        })
    }

    componentWillUnmount() {
        this.authListener();
        this.authListener = null;
    }

    _loginWithOAuthRedirect(provider) {
        base.authWithOAuthRedirect(provider, this._authHandler)
    }

    _authHandler(error) {
        if(error) {
            console.log(error)
        }
        // noop if redirect is successful
        return
    }

    _renderLoginButtons() {
        const providers = ['google', 'twitter', 'facebook', 'github']
        const loginButtons = providers.map( (provider, index) => {
            return (
                    <button   key={index}
                              onClick={() => this._loginWithOAuthRedirect(provider)}
                              className='btn--unstyled'>Login With {provider}</button>
            )
        })
        return loginButtons
    }

    render() {
        return (
            this.props.loading
            ? <LoadingAnimation height={window.innerHeight + 'px'}/>
            : <div>{this._renderLoginButtons()}</div>

        )
    }
}

export default OAuthLogin
