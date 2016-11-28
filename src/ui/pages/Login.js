import React, { Component } from 'react'
import OAuthLogin from '../containers/OAuthLogin'

// TODO: Refactor to stateless function component after Authentication is moved to Router level

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
          loading: true
        };
    }

    _switchLoadingState() {
        this.setState({ loading: false})
    }

    render() {
        return (
          <OAuthLogin loading={ this.state.loading } switchLoadingState={() => this._switchLoadingState() }/>
        )
    }
}

export default Login
