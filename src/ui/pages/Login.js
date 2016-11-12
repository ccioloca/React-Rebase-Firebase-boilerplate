import React, { Component } from 'react'
import OAuthLogin from '../forms/OAuthLogin'
import { Block } from 'jsxstyle'

class Login extends Component {
    render() {
        return (
            <Block>
                <OAuthLogin />
            </Block>
        )
    }
}

export default Login
