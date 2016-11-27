import React, { Component } from 'react';
import Grid from '../layout/Grid'
import Cell from '../layout/Cell'
import UserProfile from '../components/UserProfile'

class Profile extends Component {
  render() {
    return (
      <Grid>
        <Cell type={'l-one-quarter l-mobile-one-whole'}>
        </Cell>
        <Cell type={'l-one-half l-mobile-one-whole'}>
          My Profile - Load Container probably
          <h3>Language</h3>
          <button className='btn--unstyled'>
            English
          </button>
          <button className='btn--unstyled'>
            German
          </button>
          {this.props.language}
          <UserProfile />
        </Cell>
        <Cell type={'l-one-quarter l-mobile-one-whole'}>
        </Cell>
      </Grid>
    )
  }
}

export default Profile
