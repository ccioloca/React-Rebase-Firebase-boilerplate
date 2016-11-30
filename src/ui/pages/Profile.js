import React from 'react';
import Grid from '../layout/Grid'
import Cell from '../layout/Cell'
import UserProfile from '../containers/UserProfile'
import Card from '../layout/Card'

const Profile = ({ language, Text }) => {
  return (
    <Grid>
      <Cell type={'l-one-quarter l-mobile-one-whole'}>
      </Cell>
      <Cell type={'l-one-half l-mobile-one-whole'}>
        <Card>
          <UserProfile Text={Text} language={language}/>
        </Card>
      </Cell>
      <Cell type={'l-one-quarter l-mobile-one-whole'}>
      </Cell>
    </Grid>
  )
}

export default Profile

Profile.propTypes = {
  Text: React.PropTypes.object,
  language: React.PropTypes.string
}
