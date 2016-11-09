import React from 'react';
import { Button } from 'react-bootstrap';

const Message = (props) => {
  return (
    <li
      onClick={ props.handleClick.bind(null) }
      className={ props.show ? 'bg-warning' : 'bg-info'}>
        <Button
          onClick={ props.removeMessage.bind(null) }
          bsStyle={'danger'}>X
        </Button>
          { props.thread.title }
          { props.show && <p> { props.thread.message } </p> }
    </li>
  )
};

export default Message
