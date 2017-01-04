import React from 'react'
import moment from 'moment'
import Flag from '../../layout/Flag'
import uuidV4 from 'uuid/v4'

const MessageList = ({removeMessage, messages, language, Text}) => {

  const deleteMessageText = Text[language].delete

  return (
    <div>
      <ul className="message-list">
        { messages.map( (data, index) =>
          <li className="message-list__item" key={uuidV4()}>
              <Flag imageSrc={ data.photoURL } >
                <h3 className="message-list__display-name">{ data.displayName }</h3>
                <p className="message-list__date">{ moment(data.date).locale(language).fromNow() }</p>
                <button className="message-list__btn-delete" onClick={ () => removeMessage(index) }>
                  {deleteMessageText}
                </button>
                <p className="message-list__message">{ data.message }</p>
              </Flag>
          </li>
        )}
      </ul>
    </div>
  )
}

export default MessageList

MessageList.propTypes = {
  removeMessage: React.PropTypes.func.isRequired,
  messages: React.PropTypes.array.isRequired,
  language: React.PropTypes.string.isRequired,
  Text: React.PropTypes.object.isRequired
}
