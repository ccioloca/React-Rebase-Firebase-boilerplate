import React from 'react'
import NotesContainer from '../containers/NotesContainer'
import Grid from '../layout/Grid'
import Cell from '../layout/Cell'

const Notes = ({Text, language}) => {
  return (
    <Grid>
      <Cell desktop={ 'whole' }>
        <NotesContainer language={language} Text={Text} />
      </Cell>
    </Grid>
  )
}

export default Notes

Notes.propTypes = {
  Text: React.PropTypes.object,
  language: React.PropTypes.string
}
