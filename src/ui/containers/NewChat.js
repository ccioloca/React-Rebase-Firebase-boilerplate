import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import base from '../../rebase.config.js';
import { FormGroup, FormControl, Button, ControlLabel} from 'react-bootstrap';

class NewChat extends Component {
    constructor(props) {
     super(props);
     this.state = {value: ''}

     this.handleChange = this.handleChange.bind(this)
     this.handleSubmit = this.handleSubmit.bind(this)
   }

  handleSubmit(e){
    e.preventDefault();

    /*
     * Here, we call .post on the '/chats' ref
     * of our Firebase.  This will do a one-time 'set' on
     * that ref, replacing it with the data prop in the
     * options object.
     *
     * Keeping with the immutable data paradigm in React,
     * you should never mutate, but only replace,
     * the data in your Firebase (ie, use concat
     * to return a mutated copy of your state)
    */

    base.post('chats', {
      data: this.props.chats.concat([{
        message: this.state.value
      }]),
      context: this,
      /*
       * This 'then' method will run after the
       * post has finished.
       */
      then: () => {
        console.log(this.props.chats)
      }
    })

    this.setState({value:''})

  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
      <label>
        Message:
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
    )
  }
}

export default NewChat;
