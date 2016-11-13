import React, { Component } from 'react';
import base from '../../rebase.config.js'
import { Row, Col, Button } from 'react-bootstrap'
import { browserHistory } from 'react-router'
import LoadingAnimation from '../pure/LoadingAnimation'

class OAuthLogin extends Component {
    constructor(props){
        super(props);
        this.state = {
          loading: true
        };
    }

    componentWillMount() {

        const onRedirectBack = function(error, authData){
            if(error) console.log(error)
            if(authData.user) browserHistory.push('/dashboard')
        }

        base.authGetOAuthRedirectResult(onRedirectBack)

        this.authListener = base.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser !== null) {
                browserHistory.push('/dashboard')
            } else {
              this.setState({
                  loading: false
              })
            }
        })
    }

    componentWillUnmount() {
        this.authListener && this.authListener();
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
                <Col sm={3} key={index}>
                    <Button   onClick={() => this._loginWithOAuthRedirect(provider)}
                              bsSize="large"
                              className='btn btn-primary'>Login With {provider}</Button>
                </Col>
            )
        })
        return loginButtons
    }

    render() {
        return (
            this.state.loading
            ? <Row>
                  <Col sm={12}>
                      <LoadingAnimation />
                  </Col>
              </Row>
            : <Row>
                  {this._renderLoginButtons()}
              </Row>
        )
    }
}

export default OAuthLogin
