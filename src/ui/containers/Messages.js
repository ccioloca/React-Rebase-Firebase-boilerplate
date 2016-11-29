import React, { Component } from 'react'
import base from '../rebase.config.js'
import Center from '../layout/Center'
import LoadingAnimation from '../components/LoadingAnimation'
import Message from '../components/Message'
import NewMessage from '../components/NewMessage'
import Text from './translations'

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
     * updated the Firebase '/chats' endpoint. Firebase will then emit the changes,
     * which causes our local instance (and any other instances) to update
     * state to reflect those changes.
     */

    this.ref = base.syncState('messages', {
      context: this,
      state: 'messages',
      asArray: true,
      queries: { limitToLast: 3,
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
    const { language } = this.props
    const { messages, message } = this.state
    const { displayName, photoURL } = this.firebaseUser

    const mappedMessages = messages.map( (data, index) => {
      return (
        <Message
          data={ data }
          removeMessage={ () => this._removeMessage(index) }
          key={ index } />
      )
    })

    return (
        this.state.loading
        ? <Center height={'300px'}><LoadingAnimation height='auto'/></Center>
        : <div>
              <NewMessage onFormSubmit={ this._onFormSubmit.bind(this) }
                          displayName={ displayName }
                          photoURL={ photoURL }
                          value={ message }
                          onChange={ this._onChange.bind(this) }
                          Text={Text}
                          language={language}/>
              <div>
                <ul>{ mappedMessages }</ul>
              </div>
          </div>
    );
  }
}

export default Messages

Messages.propTypes = {
  language: React.PropTypes.string.isRequired
}
