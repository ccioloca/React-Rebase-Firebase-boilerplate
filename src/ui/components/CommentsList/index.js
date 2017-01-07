import React from 'react'
import uuidV4 from 'uuid/v4'
import Flag from '../../layout/Flag'

const CommentsList = ({data, language, Text, firebaseUser, removeComment, noteKey}) => {

  const comments = Object.values(data)
  const commentsKeys = Object.keys(data)

  return (
    <ul className="comments-list">
      { comments.map( (comment, index) => {
          return (
            <li key={uuidV4()} className={`comments-list__comment-single-wrapper`}>
              <Flag imageSrc={ comment.photoURL } >
                <div className={`comments-list__display-name`}>
                    {comment.displayName}
                </div>

                { firebaseUser.uid === comment.uid ? <button className={`comments-list__btn-delete`} onClick={ () => removeComment(noteKey, commentsKeys[index]) }>
                  <i className={`fa fa-trash-o comments-list__icon comments-list__icon--delete`} aria-hidden="true"></i>
                </button> : <div></div> }

                <div className={`comments-list__content`}>
                    {comment.comment}
                </div>

              </Flag>
            </li>
          )}
      )}
    </ul>
  )
}

export default CommentsList

CommentsList.propTypes = {
  data: React.PropTypes.object.isRequired,
  language: React.PropTypes.string.isRequired,
  Text: React.PropTypes.object.isRequired
}
