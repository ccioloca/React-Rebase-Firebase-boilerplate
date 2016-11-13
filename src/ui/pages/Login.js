import React, { Component } from 'react'
import OAuthLogin from '../containers/OAuthLogin'
import { Block } from 'jsxstyle'
import EmailLogin from '../forms/EmailLogin'

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
          loading: true
        };
    }

    _switchLoadingState() {
        console.log('inside')
        this.setState({ loading: false})
    }

    render() {
        return (
            <Block>
                <OAuthLogin loading={ this.state.loading } switchLoadingState={ () => this._switchLoadingState() }/>
                <EmailLogin loading={ this.state.loading } />
            </Block>
        )
    }
}

export default Login
