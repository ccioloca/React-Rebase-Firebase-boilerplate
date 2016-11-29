import React from 'react'
import OAuthLogin from '../containers/OAuthLogin'
import Grid from '../layout/Grid'
import Cell from '../layout/Cell'

const Login = ({Text, language}) => {
  return (
    <Grid>
      <Cell type={'l-one-quarter l-mobile-one-whole'}>
      </Cell>
      <Cell type={'l-one-half l-mobile-one-whole'}>
        <OAuthLogin language={language}
                    Text={Text} />
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
