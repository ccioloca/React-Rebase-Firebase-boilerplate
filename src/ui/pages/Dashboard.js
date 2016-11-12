import React, { Component } from 'react';
import Container from '../containers/Messages';
import NewChat from '../forms/NewChat';
import base from '../../rebase.config.js';
import { Row, Col } from 'react-bootstrap';
import { Block } from 'jsxstyle';

console.log('Please change to your own firebase address in src/Chat.js');

class Dashboard extends Component {
  constructor(props){
    super(props);
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
    return (
        <Block>
            <Row>
              <Col xs={12}>
                <NewChat chats={ this.state.messages } />
              </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <Container />
                </Col>
            </Row>
        </Block>
    )
  }
}

export default Dashboard;
