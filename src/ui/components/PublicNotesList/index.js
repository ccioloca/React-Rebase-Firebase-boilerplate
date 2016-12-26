import React from 'react'
import moment from 'moment'
import Flag from '../../layout/Flag'

const PublicNoteList = ({removeNote, notes, language, Text}) => {

  const deleteNoteText = Text[language].delete

  return (
    <div>
      <ul className="public-notes-list">
        { notes.map( (data, index) =>
          <li className="public-notes-list__item" key={index}>
              <Flag imageSrc={ data.photoURL } >
                <h3 className="public-notes-list__display-name">{ data.displayName }</h3>
                <p className="public-notes-list__date">{ moment(data.date).locale(language).fromNow() }</p>
                <button className="public-notes-list__btn-delete" onClick={ () => removeNote(data.key) }>
                  {deleteNoteText}
                </button>
                <p className="public-notes-list__message">{ data.note }</p>
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
