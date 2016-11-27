import React from 'react';
import { button } from 'react-bootstrap';

const Message = ({removeMessage, data}) => {

  return (
    <li>
        <button
          onClick={ removeMessage }>Delete Message
        </button>
        <img src={data.photoURL} role="presentation" />
        <h3>{ data.displayName }</h3>
        <p>{ data.message }</p>
        <p>{ data.date }</p>
    </li>
  )
};

export default Message

Message.propTypes = {
  removeMessage: React.PropTypes.func.isRequired,
  data: React.PropTypes.object.isRequired
}
