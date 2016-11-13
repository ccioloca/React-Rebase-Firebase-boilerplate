import React, { Component } from 'react'
import OAuthLogin from '../containers/OAuthLogin'
import { Block } from 'jsxstyle'
import RegisterWithEmail from '../forms/RegisterWithEmail'

class Register extends Component {
    render() {
        return (
            <Block>
                <RegisterWithEmail />
            </Block>
        )
    }
}

export default Register
