import React from 'react'
import OAuthLogin from '../containers/OAuthLogin'
import Grid from '../layout/Grid'
import Cell from '../layout/Cell'

const Login = ({Text, language}) => {
  return (
    <Grid>
      <Cell desktop={'half'}>
          <OAuthLogin language={language}
                      Text={Text} />
      </Cell>
    </Grid>
  )
}

export default Login

Login.propTypes = {
  Text: React.PropTypes.object,
  language: React.PropTypes.string
}
