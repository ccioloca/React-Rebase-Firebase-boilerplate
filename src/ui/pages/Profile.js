import React, { Component } from 'react';
import Grid from '../layout/Grid'
import Cell from '../layout/Cell'
import UserProfile from '../containers/UserProfile'

class Profile extends Component {
  render() {
    return (
      <Grid>
        <Cell type={'l-one-quarter l-mobile-one-whole'}>
        </Cell>
        <Cell type={'l-one-half l-mobile-one-whole'}>
          <UserProfile />
        </Cell>
        <Cell type={'l-one-quarter l-mobile-one-whole'}>
        </Cell>
      </Grid>
    )
  }
}

export default Profile
