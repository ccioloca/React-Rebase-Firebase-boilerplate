import React, { Component } from 'react'
import OAuthLogin from '../containers/OAuthLogin'
import EmailLogin from '../forms/EmailLogin'

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
            <div>
                <OAuthLogin loading={ this.state.loading } switchLoadingState={() => this._switchLoadingState() }/>
                <EmailLogin loading={ this.state.loading } />
            </div>
        )
    }
}

export default Login
