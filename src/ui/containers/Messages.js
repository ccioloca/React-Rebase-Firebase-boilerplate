import React, { Component } from 'react'
import base from '../rebase.config.js'
import Center from '../layout/Center'
import LoadingAnimation from '../components/LoadingAnimation'
import MessageList from '../components/MessageList'
import NewMessage from '../components/NewMessage'

class Messages extends Component {
  constructor(props){
    super(props);
    this.state = {
      messages: [],
      message: '',
      loading: true
    }
    this.firebaseUser = base.auth().currentUser
  }
  componentWillMount(){

    /*
     * We bind the 'messages' firebase endopint to our 'messages' state.
     * Anytime the firebase updates, it will call 'setState' on this component
     * with the new state.
     *
     * Any time we call 'setState' on our 'messages' state, it will
     * updated the Firebase '/messages' endpoint. Firebase will then emit the changes,
     * which causes our local instance (and any other instances) to update
     * state to reflect those changes.
     */

    this.ref = base.syncState('messages', {
      context: this,
      state: 'messages',
      asArray: true,
      queries: { limitToLast: 6,
                  orderByKey: 'reverse'},
      then: () => { this.setState({loading:false}) }
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

    var arr = this.state.messages.concat([])
    arr.splice(index, 1)

    /*
     * Calling setState here will update the '/messages' ref on our Firebase.
     * Notice that I'm also updating the 'show' state.  Because there is no
     * binding to our 'show' state, it will update the local 'show' state normally,
     * without going to Firebase.
     */

    this.setState({
      messages: arr
    });
  }

  _onFormSubmit(event, newMessage) {
    event.preventDefault()
    if (newMessage.message) {
      this.setState({messages: this.state.messages.concat([newMessage])})
      this.setState({message: ''})
     }

  }

  _onChange(value) {
    this.setState({message:value})
  }

  render() {
    const { language, Text } = this.props
    const { messages, message } = this.state
    const { displayName, photoURL } = this.firebaseUser

    return (
        this.state.loading
        ? <Center height={'300px'}><LoadingAnimation height='auto'/></Center>
        : <div>
              <MessageList Text={Text}
                           language={language}
                           messages={messages}
                           removeMessage={ () => this._removeMessage() }/>
              <NewMessage onFormSubmit={ this._onFormSubmit.bind(this) }
                          displayName={ displayName }
                          photoURL={ photoURL }
                          value={ message }
                          Text={Text}
                          onChange={ this._onChange.bind(this) }
                          language={language}/>
          </div>
    );
  }
}

export default Messages

Messages.propTypes = {
  language: React.PropTypes.string.isRequired
}
