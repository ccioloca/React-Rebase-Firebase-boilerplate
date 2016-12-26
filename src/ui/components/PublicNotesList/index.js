import React from 'react'
import moment from 'moment'
import Flag from '../../layout/Flag'

const PublicNoteList = ({removeNote, notes, language, Text}) => {

  const deleteNoteText = Text[language].delete

  return (
    <div>
      <ul className="message-list">
        { notes.map( (data, index) =>
          <li className="message-list__item" key={index}>
              <Flag imageSrc={ data.photoURL } >
                <h3 className="message-list__display-name">{ data.displayName }</h3>
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

export default PublicNoteList

PublicNoteList.propTypes = {
  removeNote: React.PropTypes.func.isRequired,
  notes: React.PropTypes.array.isRequired,
  language: React.PropTypes.string.isRequired,
  Text: React.PropTypes.object.isRequired
}
