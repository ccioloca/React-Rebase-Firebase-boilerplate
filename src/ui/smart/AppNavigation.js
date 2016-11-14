import React, { Component } from 'react'
import Message from '../pure/Message.js'
import base from '../../rebase.config.js'
import { Block } from 'jsxstyle'
import Navigation from '../pure/Navigation'
import LoadingAnimation from '../pure/LoadingAnimation'
import { isLoggedIn } from '../../utils/authenticated'

console.log('Please change to your own firebase address in components/Container.js')

class AppNavigation extends Component {
    constructor(props){
        super(props);
        this.state = {
          isLoggedIn: null
        }
    }

    componentDidMount() {
        let hasUser = isLoggedIn()
        console.log('hasUser', hasUser)
        this.setState({ isLoggedIn: hasUser })
    }

    render() {
      return (
          <Navigation isLoggedIn={this.state.isLoggedIn} />
      )
    }
}

export default AppNavigation
