import React, { Component } from 'react';
import base from '../rebase.config.js'
import { browserHistory } from 'react-router'
import SocialLoginButtons from '../components/SocialLoginButtons'

import LoadingAnimation from '../components/LoadingAnimation'

class OAuthLogin extends Component {

  constructor(props){
    super(props)
    this.state = {
      loading: true
    }
  }

  componentWillMount() {

    const onRedirectBack = function(error, authData){
      if(error) console.log(error)
      if(authData.user) browserHistory.replace('/dashboard')
    }

    base.authGetOAuthRedirectResult(onRedirectBack)

    this.authListener = base.auth().onAuthStateChanged(firebaseUser => {
      if ( firebaseUser !== null ) {
        browserHistory.replace('/dashboard')
      } else {
        this.setState({loading: false})
      }
    })

  }

  componentWillUnmount() {
    this.authListener()
    this.authListener = null;
  }

  _loginWithOAuthRedirect(provider) {
      base.authWithOAuthRedirect('google', this._authHandler)
  }

  _authHandler(error) {
      if(error) {
          console.log(error)
      }
      // noop if redirect is successful
      return
  }

  render() {
    const { Text, language } = this.props
    const providers = ['google', 'twitter', 'facebook', 'github']

    return (
      this.state.loading
      ? <LoadingAnimation height={window.innerHeight + 'px'}/>
      : <SocialLoginButtons providers={providers}
                            language={language}
                            Text={Text}
                            onClick={() => this._loginWithOAuthRedirect()}/>
    )
  }
}

export default OAuthLogin

OAuthLogin.propTypes = {
  language: React.PropTypes.string.isRequired,
  Text: React.PropTypes.object.isRequired
}
