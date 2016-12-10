import React from 'react'
import Grid from '../layout/Grid'
import Cell from '../layout/Cell'

const Notes = ({Text, language}) => {
  return (
    <Grid>
      <Cell desktop={ 'whole' } mobile={ 'whole'} tablet={'whole'}>
        I am an example notes page, replace me with a component or container
      </Cell>
    </Grid>
  )
}

export default Notes

Notes.propTypes = {
  Text: React.PropTypes.object,
  language: React.PropTypes.string
}
