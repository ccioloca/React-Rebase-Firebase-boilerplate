import React from 'react'
import Grid from '../layout/Grid'
import Cell from '../layout/Cell'

const NewArticle = ({Text, language}) => {
  return (
    <Grid>
      <Cell desktop={'half'}>
        hello world
      </Cell>
    </Grid>
  )
}

export default NewArticle

NewArticle.propTypes = {
  Text: React.PropTypes.object,
  language: React.PropTypes.string
}
