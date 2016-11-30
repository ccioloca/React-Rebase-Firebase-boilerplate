import React from 'react'
import OAuthLogin from '../containers/OAuthLogin'
import Grid from '../layout/Grid'
import Cell from '../layout/Cell'
import Card from '../layout/Card'

const Login = ({Text, language}) => {
  return (
    <Grid>
      <Cell type={'l-one-quarter l-mobile-one-whole'}>
      </Cell>
      <Cell type={'l-one-half l-mobile-one-whole'}>
        <Card>
          <OAuthLogin language={language}
                      Text={Text} />
        </Card>
      </Cell>
      <Cell type={'l-one-quarter l-mobile-one-whole'}>
      </Cell>
    </Grid>
  )
}

export default Login

Login.propTypes = {
  Text: React.PropTypes.object,
  language: React.PropTypes.string
}
