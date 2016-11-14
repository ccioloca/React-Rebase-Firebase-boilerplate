import React, { Component } from 'react'
import Navigation from '../presentational/Navigation'
import LoadingAnimation from '../presentational/LoadingAnimation'

console.log('Please change to your own firebase address in components/Container.js')

class AppNavigation extends Component {
    render() {
        return (
            this.props.loading
            ? <Navigation hasUser={this.props.hasUser} />
            : null
        )
    }
}

export default AppNavigation
