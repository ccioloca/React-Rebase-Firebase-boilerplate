import React, { Component } from 'react';
import Container from './components/Container';
import NewChat from './components/NewChat';
import base from './config';
import { Grid, Row } from 'react-bootstrap';

console.log('Please change to your own firebase address in src/App.js');

class App extends Component {
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
          <NewChat chats={ this.state.messages } />
        </Row>
        <Row>
          <Container />
        </Row>
      </Grid>
    )
  }
}

export default App;
