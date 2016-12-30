import React from 'react'
import uuidV4 from 'uuid/v4'
import Flag from '../../layout/Flag'

const CommentsList = ({data, language, Text}) => {

  const comments = Object.values(data)

  return (
    <ul className="comments-list">
      { comments.map( (comment) => {
          return (
            <li key={uuidV4()} className="comments-list__comment-wrapper">
              <Flag imageSrc={ comment.photoURL } >
                <div className="comments-list__comment">
                    {comment.comment}
                </div>
                <div className="comments-list__display-name">
                    {comment.displayName}
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
