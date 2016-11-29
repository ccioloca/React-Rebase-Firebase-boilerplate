import React from 'react'
import moment from 'moment'

const MessageList = ({removeMessage, messages, language, Text}) => {

  const deleteMessageText = Text[language].delete

  const mappedMessages = messages.map( (data, index) => {
    const displayDate = moment(data.date).locale(language).fromNow()
    return (
      <li key={index}>
          <button onClick={ () => removeMessage(index) }>{deleteMessageText}</button>
          <img src={data.photoURL} role="presentation" />
          <h3>{ data.displayName }</h3>
          <p>{ data.message }</p>
          <p>{ displayDate }</p>
      </li>
    )
  })

  return (
    <div>
      <ul>{ mappedMessages }</ul>
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
