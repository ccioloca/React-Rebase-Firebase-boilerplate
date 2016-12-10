import React from 'react'
import Grid from '../layout/Grid'
import Cell from '../layout/Cell'

const Index = ({Text, language}) => {
  return (
    <Grid>
      <Cell desktop={ 'whole' }>
        I am an example index page, replace me with a component or container
      </Cell>
    </Grid>
  )
}

export default Index

Index.propTypes = {
  Text: React.PropTypes.object,
  language: React.PropTypes.string
}
