import React from 'react'
import UserNotesContainer from '../containers/UserNotesContainer'

const Notes = ({Text, language}) => {
  return (
    <UserNotesContainer language={language} Text={Text} />
  )
}

export default Notes

Notes.propTypes = {
  Text: React.PropTypes.object,
  language: React.PropTypes.string
}
