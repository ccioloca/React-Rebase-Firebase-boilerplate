import React, { Component } from 'react';
import Container from '../containers/Messages';
import NewChat from '../forms/NewChat';
import base from '../../rebase.config.js';
import { Grid, Row, Col } from 'react-bootstrap';

console.log('Please change to your own firebase address in src/Chat.js');

class Index extends Component {
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
      <Grid>
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
      </Grid>
    )
  }
}

export default Index;
