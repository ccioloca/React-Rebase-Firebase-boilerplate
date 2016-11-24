import React, { Component } from 'react'
import browserHistory from 'react-router'

class Index extends Component {
    componentWillMount() {
      const {hasUser} = this.props
      if (hasUser) browserHistory.replace('/dashboard')
    }
    render() {
        return (
          <div>You are not logged in</div>
        )
    }
}

export default Index
