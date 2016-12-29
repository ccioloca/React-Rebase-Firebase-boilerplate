import React from 'react'
import moment from 'moment'
import Flag from '../../layout/Flag'
import uuidV4 from 'uuid/v4'

const PublicNoteList = ({removeNote, notes, toggleCommentFormVisibility, handleSubmit, handleChange, value, selectedNote, language, Text}) => {

  let comment

  const renderCommentForm = <form className="form public-notes-list__add-new-comment-form"
            onSubmit={(event) => handleSubmit(event, {
              comment: comment.value,
              date: Date.now()
      })}>
        <div className="form__row public-notes-list__add-new-comment-form__row">
            <input className="form__field public-notes-list__add-new-comment-form__field"
                  type='text'
                  key={'0'}
                  ref={c => (comment = c)}
                  value={value}
                  placeholder={Text[language].addNewComment}
                  onChange={ () => handleChange(comment.value) }
                  />
        </div>
      </form>

  return (
    <div>
      {renderCommentForm}
      <ul className="public-notes-list">
        { notes.map( (data, index) => {
          return (
          <li className="public-notes-list__item" key={uuidV4()}>
              <Flag imageSrc={ data.photoURL } >
                <h3 className="public-notes-list__display-name">{ data.displayName }</h3>
                <p className="public-notes-list__category">{ data.category }</p>
                <p className="public-notes-list__date">{ moment(data.date).locale(language).fromNow() }</p>
                <button className="public-notes-list__btn-delete" onClick={ () => removeNote(data.key) }>
                  {Text[language].delete}
                </button>
                <p className="public-notes-list__message">{ data.note }</p>
                <button className="public-notes-list__button" onClick={ () => toggleCommentFormVisibility(data.key) }>Add New Comment</button>
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
  handleSubmit: React.PropTypes.func.isRequired,
  handleChange: React.PropTypes.func.isRequired,
  value: React.PropTypes.string.isRequired,
  selectedNote: React.PropTypes.string.isRequired
}
