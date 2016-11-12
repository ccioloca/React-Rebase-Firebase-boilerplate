import React, { Component } from 'react'
import base from '../../rebase.config.js'
import { Row, Col, Button } from 'react-bootstrap'
import { browserHistory } from 'react-router'
import LoadingAnimation from '../pure/LoadingAnimation'

class Login extends Component {
    constructor(props){
      super(props);
      this.state = {
        loading: true
      };
    }

    componentDidMount() {
        base.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser !== null) {
                browserHistory.push('/loggedin')
            } else {
                this.setState({
                    loading:false
                })
            }
        })
    }

    componentWillUnmount() {
        var unsubscribe = base.auth().onAuthStateChanged(function (user) {
            // handle it
        });
        unsubscribe();

    }

    _loginWithOAuthRedirect(provider) {
        base.authWithOAuthRedirect(provider, this._authHandler)
    }

    _authHandler(error) {
      if(error) {
          console.log(error)
      }
      // noop if redirect is successful
      return;
    }

    render() {
        const providers = ['google', 'twitter', 'facebook', 'github']
        const loginButtons = providers.map( (provider, index) => {
          return (
              <Col sm={3} key={index}>
                  <Button   onClick={() => this._loginWithOAuthRedirect(provider).bind(this)}
                            bsSize="large"
                            className='btn btn-primary'>Login With {provider}</Button>
              </Col>
          );
        });
        return (
            this.state.loading
            ? <LoadingAnimation />
            : <Row>
                {loginButtons}
              </Row>
        )
    }
}

export default Login
