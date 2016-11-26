import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import base from '../../../rebase.config.js';

class NewMessage extends Component {
    constructor(props) {
     super(props);
     this.state = {value: ''}

     this.handleChange = this.handleChange.bind(this)
     this.handleSubmit = this.handleSubmit.bind(this)
   }

  handleSubmit(e) {
    e.preventDefault();
    const message = this.state.value
    const userid = base.auth().currentUser.uid
    const displayName = base.auth().currentUser.displayName
    const photoURL = base.auth().currentUser.photoURL
      if (message) {
        var immediatelyAvailableReference = base.push('messages', {
          data: {message, userid, displayName, photoURL},
          then(err){
            if(!err){
              console.log('pushed')
            }
          }
        })
        //available immediately, you don't have to wait for the callback to be called
        var generatedKey = immediatelyAvailableReference.key

      }
      console.log(generatedKey)

    this.setState({value: ''})

  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
      <label>
        Message:
        <input type='text' value={this.state.value} onChange={this.handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
    )
  }
}

export default NewMessage
