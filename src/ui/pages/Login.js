import React, { Component } from 'react'
import OAuthLogin from '../containers/OAuthLogin'
import { Block } from 'jsxstyle'
import EmailLogin from '../forms/EmailLogin'

class Login extends Component {
    render() {
        return (
            <Block>
                <OAuthLogin />
                <EmailLogin />
            </Block>
        )
    }
}

export default Login
