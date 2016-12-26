import React from 'react'
import moment from 'moment'
import Flag from '../../layout/Flag'

const UserNotesList = ({removeNote, notes, photoURL, displayName, language, Text}) => {

  const deleteNoteText = Text[language].delete

  return (
    <div>
      <ul className="user-notes-list">
        { notes.map( (data, index) =>
          <li className="user-notes-list__item" key={index}>
              <Flag imageSrc={ photoURL } >
                <h3 className="user-notes-list__display-name">{ displayName }</h3>
                <p className="user-notes-list__date">{ moment(data.date).locale(language).fromNow() }</p>
                <button className="user-notes-list__btn-delete" onClick={ () => removeNote(data.key) }>
                  {deleteNoteText}
                </button>
                <p className="user-notes-list__message">{ data.note }</p>
              </Flag>
          </li>
        )}
      </ul>
    </div>
  )
}

export default UserNotesList

UserNotesList.propTypes = {
  removeNote: React.PropTypes.func.isRequired,
  notes: React.PropTypes.array.isRequired,
  displayName: React.PropTypes.string.isRequired,
  photoURL: React.PropTypes.string.isRequired,
  language: React.PropTypes.string.isRequired,
  Text: React.PropTypes.object.isRequired
}
