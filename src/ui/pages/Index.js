import React, { Component } from 'react'
import browserHistory from 'react-router'
import Grid from '../layout/Grid'
import Cell from '../layout/Cell'

// TODO: Refactor to stateless function component after Authentication is moved to Router level

class Index extends Component {
    componentWillMount() {
      const {hasUser} = this.props
      if (hasUser) browserHistory.replace('/dashboard')
    }
    render() {
        return (
          <Grid>
            <Cell type={'l-one-whole l-mobile-one-whole'}>
              You are not loggedin
            </Cell>
          </Grid>
        )
    }
}

export default Index
