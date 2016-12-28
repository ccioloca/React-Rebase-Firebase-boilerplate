import React from 'react'
import moment from 'moment'
import Flag from '../../layout/Flag'
import uuidV4 from 'uuid/v4'

const PublicNoteList = ({removeNote, notes, toggleShowAddNewComment, onAddNewCommentFormSubmit, onAddNewCommentChange, value, showAddNewComment, language, Text}) => {

  const deleteNoteText = Text[language].delete
  let addNewComment = new Array(10)

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
                <button className="public-notes-list__btn-delete" onClick={ () => removeNote(data.key) }>
                  {deleteNoteText}
                </button>
                <p className="public-notes-list__message">{ data.note }</p>
                <button className="public-notes-list__button" onClick={ () => toggleShowAddNewComment(index) }>Add New Comment</button>
                { showAddNewComment === index ? <form className="form public-notes-list__add-new-comment-form"
                      onSubmit={(event) => onAddNewCommentFormSubmit(event, {
                        addNewComment: addNewComment[index].value
                }, data.key)}>
                  <div className="form__row public-notes-list__add-new-comment-form__row">
                      <input className="form__field public-notes-list__add-new-comment-form__field"
                            type='text'
                            key={index}
                            ref={c => (addNewComment[index] = c)}
                            value={value[index]}
                            placeholder={Text[language].addNewComment}
                            onChange={ () => onAddNewCommentChange(addNewComment[index].value, index) }
                            />
                  </div>
                </form> : <div></div> }
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
  toggleShowAddNewComment: React.PropTypes.func.isRequired,
  onAddNewCommentFormSubmit: React.PropTypes.func.isRequired,
  onAddNewCommentChange: React.PropTypes.func.isRequired,
  value: React.PropTypes.array.isRequired,
  showAddNewComment: React.PropTypes.number.isRequired
}
