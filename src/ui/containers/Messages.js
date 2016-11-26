import React, { Component } from 'react';
import Message from '../presentational/Message';
import base from '../../rebase.config.js';
import LoadingAnimation from '../presentational/LoadingAnimation';
import Center from '../layout/Center'

import NewChat from './NewChat';

class Messages extends Component {
  constructor(props){
    super(props);
    this.state = {
      messages: [],
      show: null,
      loading: true
    }
  }
  componentWillMount(){

    /*
     * We bind the 'chats' firebase endopint to our 'messages' state.
     * Anytime the firebase updates, it will call 'setState' on this component
     * with the new state.
     *
     * Any time we call 'setState' on our 'messages' state, it will
     * updated the Firebase '/chats' endpoint. Firebase will then emit the changes,
     * which causes our local instance (and any other instances) to update
     * state to reflect those changes.
     */

    this.ref = base.syncState('chats', {
      context: this,
      state: 'messages',
      asArray: true,
      then: () => {
          this.setState({
            loading: false
          })
      }
    })
  }
  componentWillUnmount(){
    /*
     * When the component unmounts, we remove the binding.
     * Invoking syncState (or bindToState or listenTo)
     * will return a reference to that listener (see line 30).
     * You will use that ref to remove the binding here.
     */

    base.removeBinding(this.ref);
  }
  _removeMessage(index){

    console.log('index', index)
    var arr = this.state.messages.concat([]);
    arr.splice(index, 1);
    console.log('arr', arr);

    /*
     * Calling setState here will update the '/chats' ref on our Firebase.
     * Notice that I'm also updating the 'show' state.  Because there is no
     * binding to our 'show' state, it will update the local 'show' state normally,
     * without going to Firebase.
     */

    this.setState({
      messages: arr,
      show: null
    });
  }

  render(){
    const { messages} = this.state
    const mappedMessages = messages.map( (item, index) => {
      return (
        <Message
          data={ item }
          removeMessage={ () => this._removeMessage(index) }
          key={ index } />
      );
    });


    return (
        this.state.loading
        ? <Center height={'300px'}><LoadingAnimation height='auto'/></Center>
        : <div>
              <NewChat chats={ messages } />
              <div>
                <ul>{ mappedMessages }</ul>
              </div>
          </div>
    );
  }
}

export default Messages
