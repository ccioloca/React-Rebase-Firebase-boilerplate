import React from 'react'
import moment from 'moment'

const MessageList = ({removeMessage, messages, language, Text}) => {

  const deleteMessageText = Text[language].delete

  const mappedMessages = messages.map( (data, index) => {
    const displayDate = moment(data.date).locale(language).fromNow()
    return (
      <li className="message-list__item" key={index}>
          <img src={ data.photoURL }
               role="presentation"
               className="message-list__image" />

          <h3 className="message-list__display-name">{ data.displayName }</h3>
          <p className="message-list__date">{ displayDate }</p>
          <button className="message-list__btn-delete" onClick={ () => removeMessage(index) }>
            {deleteMessageText}
          </button>
          <p className="message-list__message">{ data.message }</p>

      </li>
    )
  })

  return (
    <div>
      <ul className="message-list">{ mappedMessages }</ul>
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
