import React from 'react'
import moment from 'moment'
import Flag from '../../layout/Flag'
import uuidV4 from 'uuid/v4'
import CommentsList from '../CommentsList'

const PublicNoteList = ({removeNote, toggleEditFormVisibility, editNote, notes, toggleCommentFormVisibility, selectedNote, selectedEditNote, language, Text, children, firebaseUser, removeComment}) => {
  
  return (
    <div>
      <ul className="public-notes-list">
        { notes.map( (data, index) => {
          return (
          <li className="public-notes-list__item" key={uuidV4()}>
              <Flag imageSrc={ data.photoURL } >
                <h3 className="public-notes-list__display-name">{ data.displayName }</h3>
                <p className="public-notes-list__category">{ data.category }</p>
                <p className="public-notes-list__date">{ moment(data.date).locale(language).fromNow() }</p>
                { firebaseUser.uid === data.uid ? 
                  <div>
                    <button className="public-notes-list__btn-delete" 
                            onClick={ () => removeNote(data.key) }>
                            {Text[language].delete}
                    </button>
                    <button className="public-notes-list__btn-delete"
                            onClick={ () => toggleEditFormVisibility(data.key, data.note) }>
                            {Text[language].edit}
                    </button>
                  </div> : <div></div> }
                <p className="public-notes-list__message">{ data.note }</p>
                <button className="public-notes-list__button" onClick={ () => toggleCommentFormVisibility(data.key) }>Add New Comment</button>
                {data.key === selectedNote && children[0]}
                {data.key === selectedEditNote && children[1]}
                { data.comments &&
                  <CommentsList data={data.comments}
                                Text={Text}
                                language={language}
                                firebaseUser={firebaseUser}
                                removeComment={ removeComment }
                                noteKey={ data.key } />
                }
              </Flag>
        </li> )}
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
  Text: React.PropTypes.object.isRequired,
  toggleCommentFormVisibility: React.PropTypes.func.isRequired,
  selectedNote: React.PropTypes.string.isRequired,
  selectedEditNote: React.PropTypes.string.isRequired,
  children: React.PropTypes.node,
  toggleEditFormVisibility: React.PropTypes.func.isRequired
}
