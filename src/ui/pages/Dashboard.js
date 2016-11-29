import React from 'react'
import Messages from '../containers/Messages'
import Grid from '../layout/Grid'
import Cell from '../layout/Cell'

const Dashboard = ({language, Text}) => {
  return (
    <Grid>
      <Cell type={'l-one-quarter l-mobile-one-whole'}>
      </Cell>
      <Cell type={'l-one-half l-mobile-one-whole'}>
        <Messages language={language} Text={Text} />
      </Cell>
      <Cell type={'l-one-quarter l-mobile-one-whole'}>
      </Cell>
    </Grid>
  )
}

export default Dashboard
