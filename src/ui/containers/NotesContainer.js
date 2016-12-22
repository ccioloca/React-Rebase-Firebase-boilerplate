import React, { Component } from 'react'
import base from '../rebase.config.js'
import Center from '../layout/Center'
import LoadingAnimation from '../components/LoadingAnimation'
import NoteList from '../components/NoteList'
import NewNote from '../components/NewNote'

class NotesContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes: [],
      note: '',
      loading: true
    }
    this.firebaseUser = base.auth().currentUser
  }
  componentWillMount(){

    /*
     * We bind the 'notes' firebase endopint to our 'notes' state.
     * Anytime the firebase updates, it will call 'setState' on this component
     * with the new state.
     *
     * Any time we call 'setState' on our 'notes' state, it will
     * updated the Firebase '/notes' endpoint. Firebase will then emit the changes,
     * which causes our local instance (and any other instances) to update
     * state to reflect those changes.
     */

    this.ref = base.listenTo('notes', {
      context: this,
      asArray: false,
      queries: { limitToLast: 10 },
      then: (notes) => { 
        var notesArray = [];
        var i = 0;
        for (var key in notes) {
          notesArray.push(notes[key]);
          notesArray[i]["key"] = key;
          i++;
        }
        console.log(notesArray);
        this.setState({notes: notesArray, loading: false});
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

  _removeNote(index){

    /*
     * Calling setState here will update the '/notes' ref on our Firebase.
     * Notice that I'm also updating the 'show' state.  Because there is no
     * binding to our 'show' state, it will update the local 'show' state normally,
     * without going to Firebase.
     */

    base.remove(`notes/${index}`).then(() => console.log('deleted'));
  }

  _onFormSubmit(event, newNote) {
    event.preventDefault()
    if (newNote.note) {
      base.push('notes', {
        data: newNote,
      }).then(() => this.setState({note: ''})).catch(err => console.log(err));
    }

  }

  _onChange(value) {
    this.setState({note:value})
  }

  render() {
    const { language, Text } = this.props
    const { notes, note } = this.state
    const { displayName, photoURL } = this.firebaseUser

    console.log(this.state.notes)
    return (
        this.state.loading
        ? <Center height={'300px'}><LoadingAnimation height='auto'/></Center>
        : <div>
              <NoteList Text={Text}
                           language={language}
                           notes={notes}
                           removeNote={ (index) => this._removeNote(index) }/>
              <NewNote onFormSubmit={ this._onFormSubmit.bind(this) }
                          displayName={ displayName }
                          photoURL={ photoURL }
                          value={ note }
                          Text={Text}
                          onChange={ this._onChange.bind(this) }
                          language={language}/>
          </div>
    );
  }
}

export default NotesContainer

NotesContainer.propTypes = {
  language: React.PropTypes.string.isRequired
}
