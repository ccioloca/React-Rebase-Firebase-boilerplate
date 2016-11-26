import React from 'react';
import { Button } from 'react-bootstrap';

const Message = ({removeMessage, data}) => {

  return (
    <li>
        <Button
          onClick={ removeMessage }
          bsStyle={'danger'}>X
        </Button>
        <img src={data.photoURL} />
        <h3>{ data.displayName }</h3>
        <p>{ data.message }</p>
    </li>
  )
};

export default Message

Message.propTypes = {
  removeMessage: React.PropTypes.func.isRequired,
  data: React.PropTypes.object.isRequired
}
