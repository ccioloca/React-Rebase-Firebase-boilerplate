import React from 'react';
import { Button } from 'react-bootstrap';

const Message = ({handleClick, show, removeMessage, thread}) => {
  return (
    <li
      onClick={ handleClick }
      className={ show ? 'bg-warning' : 'bg-info'}>
        <Button
          onClick={ removeMessage }
          bsStyle={'danger'}>X
        </Button>
          { thread.title }
          { show && <p> { thread.message } </p> }
    </li>
  )
};

export default Message

Message.propTypes = {
  handleClick: React.PropTypes.func.isRequired,
  show: React.PropTypes.bool,
  removeMessage: React.PropTypes.func.isRequired,
  thread: React.PropTypes.object.isRequired
}
