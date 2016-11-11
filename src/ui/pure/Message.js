import React from 'react';
import { Button } from 'react-bootstrap';

const Message = (props) => {
  return (
    <li
      onClick={ props.handleClick }
      className={ props.show ? 'bg-warning' : 'bg-info'}>
        <Button
          onClick={ props.removeMessage }
          bsStyle={'danger'}>X
        </Button>
          { props.thread.title }
          { props.show && <p> { props.thread.message } </p> }
    </li>
  )
};

export default Message
