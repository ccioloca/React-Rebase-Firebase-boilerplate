import React from 'react';
import Grid from '../layout/Grid'
import Cell from '../layout/Cell'
import UserProfile from '../containers/UserProfile'

const Profile = ({ language, Text }) => {
  return (
    <Grid>
      <Cell desktop={'whole'}>
        <UserProfile Text={Text} language={language}/>
      </Cell>
    </Grid>
  )
}

export default Profile

Profile.propTypes = {
  Text: React.PropTypes.object,
  language: React.PropTypes.string
}
