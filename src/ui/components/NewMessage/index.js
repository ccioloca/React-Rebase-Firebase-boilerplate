import React, { Component } from 'react'
import base from '../../rebase.config.js'

class NewMessage extends Component {
    constructor(props) {
     super(props);
     this.state = {value: ''}
     this.firebaseUser = base.auth().currentUser
     this.handleChange = this.handleChange.bind(this)
     this.handleSubmit = this.handleSubmit.bind(this)
   }

  handleSubmit(e) {
    e.preventDefault()
    const message = this.state.value
    const date = Date.now()
    const { uid, displayName, photoURL } = this.firebaseUser

    if (message) {
      base.push('messages', {
        data: {message, uid, displayName, photoURL, date}
      })
    }

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
