import React from 'react'
import moment from 'moment'
import Flag from '../../layout/Flag'
import uuidV4 from 'uuid/v4'

const UserNotesList = ({toggleEditFormVisibility, selectedEditNote, removeNote, notes, photoURL, displayName, language, Text, children}) => {

  return (
    <div>
      <ul className="user-notes-list">
        { notes.map( (data, index) =>
          <li className="user-notes-list__item" key={uuidV4()}>
              <Flag imageSrc={ photoURL } >
                <h3 className="user-notes-list__display-name">{ displayName }</h3>
                <p className="user-notes-list__date">{ moment(data.date).locale(language).fromNow() }</p>
                <div className="user-notes-list__icons-wrapper">
                  <button className="user-notes-list__btn-edit" onClick={ () => toggleEditFormVisibility(data.key, data.note) }>
                    <i className="fa fa-pencil user-notes-list__icon user-notes-list__icon--edit" aria-hidden="true"></i>
                  </button>
                  <button className="user-notes-list__btn-delete" onClick={ () => removeNote(data.key) }>
                    <i className="fa fa-trash-o user-notes-list__icon user-notes-list__icon--delete" aria-hidden="true"></i>
                  </button>
                </div>
                <p className="user-notes-list__content">{ data.note }</p>
                {data.key === selectedEditNote && children}
              </Flag>
          </li>
        )}
      </ul>
    </div>
  )
}

export default UserNotesList

UserNotesList.propTypes = {
  toggleEditFormVisibility: React.PropTypes.func.isRequired,
  removeNote: React.PropTypes.func.isRequired,
  notes: React.PropTypes.array.isRequired,
  displayName: React.PropTypes.string.isRequired,
  photoURL: React.PropTypes.string.isRequired,
  children: React.PropTypes.node,
  language: React.PropTypes.string.isRequired,
  Text: React.PropTypes.object.isRequired
}
