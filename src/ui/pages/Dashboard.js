import React from 'react'
import Messages from '../containers/Messages'
import Grid from '../layout/Grid'
import Cell from '../layout/Cell'

const Dashboard = ({language, Text}) => {
  return (
    <Grid>
      <Cell desktop={'whole'}>
        <Messages language={language} Text={Text} />
      </Cell>
    </Grid>
  )
}

export default Dashboard

Dashboard.propTypes = {
  Text: React.PropTypes.object,
  language: React.PropTypes.string
}
