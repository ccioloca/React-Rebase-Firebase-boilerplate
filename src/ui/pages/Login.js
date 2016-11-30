import React from 'react'
import OAuthLogin from '../containers/OAuthLogin'
import Grid from '../layout/Grid'
import Cell from '../layout/Cell'
import Card from '../layout/Card'

const Login = ({Text, language}) => {
  return (
    <Grid>
      <Cell desktop={'half'}>
        <Card>
          <OAuthLogin language={language}
                      Text={Text} />
        </Card>
      </Cell>
    </Grid>
  )
}

export default Login

Login.propTypes = {
  Text: React.PropTypes.object,
  language: React.PropTypes.string
}
