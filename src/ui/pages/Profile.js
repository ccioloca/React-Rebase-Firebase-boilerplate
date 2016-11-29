import React from 'react';
import Grid from '../layout/Grid'
import Cell from '../layout/Cell'
import UserProfile from '../containers/UserProfile'

const Profile = ({ language, Text }) {

  return (
    <Grid>
      <Cell type={'l-one-quarter l-mobile-one-whole'}>
      </Cell>
      <Cell type={'l-one-half l-mobile-one-whole'}>
        <UserProfile Text={Text} language={language}/>
      </Cell>
      <Cell type={'l-one-quarter l-mobile-one-whole'}>
      </Cell>
    </Grid>
  )
}

export default Profile
