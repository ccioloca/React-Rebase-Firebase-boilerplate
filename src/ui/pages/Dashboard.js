import React, { Component } from 'react';
import Messages from '../containers/Messages';
import NewChat from '../forms/NewChat';
import base from '../../rebase.config.js';
import { Row, Col } from 'react-bootstrap';
import { Block } from 'jsxstyle';

class Dashboard extends Component {
  constructor(){
    super();
    this.state = {
      messages: []
    };
  }
  componentWillMount(){
  /*
   * Here we call 'bindToState', which will update
   * our local 'messages' state whenever our 'chats'
   * Firebase endpoint changes.
   */
    base.bindToState('chats', {
      context: this,
      state: 'messages',
      asArray: true
    });
  }
  render(){
    const { messages } = this.state
    return (
        <Block>
            <Row>
              <Col xs={12}>
                <NewChat chats={ messages } />
              </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <Messages />
                </Col>
            </Row>
        </Block>
    )
  }
}

export default Dashboard;
