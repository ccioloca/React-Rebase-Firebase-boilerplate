import React, { Component } from 'react'
import browserHistory from 'react-router'
import Grid from '../layout/Grid'
import Cell from '../layout/Cell'

// TODO: Refactor to stateless function component after Authentication is moved to Router level
// Replace content with a container or component

class Index extends Component {
    componentWillMount() {
      const { hasUser, Text, language } = this.props
      if (hasUser) browserHistory.replace('/dashboard')
    }
    render() {
        const { Text, language } = this.props
        return (
          <Grid>
            <Cell type={'l-one-whole l-mobile-one-whole'}>
              {Text[language].notLoggedIn}
            </Cell>
          </Grid>
        )
    }
}

export default Index
