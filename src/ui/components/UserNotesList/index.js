import React from 'react'
import moment from 'moment'
import Flag from '../../layout/Flag'

const UserNotesList = ({removeNote, notes, photoURL, displayName, language, Text}) => {

  const deleteNoteText = Text[language].delete

  return (
    <div>
      <ul className="message-list">
        { notes.map( (data, index) =>
          <li className="message-list__item" key={index}>
              <Flag imageSrc={ photoURL } >
                <h3 className="message-list__display-name">{ displayName }</h3>
                <p className="message-list__date">{ moment(data.date).locale(language).fromNow() }</p>
                <button className="message-list__btn-delete" onClick={ () => removeNote(data.key) }>
                  {deleteNoteText}
                </button>
                <p className="message-list__message">{ data.note }</p>
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
