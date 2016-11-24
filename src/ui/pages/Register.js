import React, { Component } from 'react'
import { Block } from 'jsxstyle'
import RegisterWithEmail from '../forms/RegisterWithEmail'
import base from '../../rebase.config.js'
import { browserHistory } from 'react-router'

class Register extends Component {

    componentWillMount() {
        if ( this._isLoggedIn() ) browserHistory.replace('/dashboard')
    }

    _isLoggedIn() {
        if (null === base.auth().currentUser || false === base.auth().currentUser.emailVerified ) {
            return false
        }
        return true
    }

    render() {
        return (
            <Block>
                <RegisterWithEmail />
            </Block>
        )
    }
}

export default Register
