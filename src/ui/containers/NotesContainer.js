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
      loading: true,
      isPublic: true
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
     console.log(this.firebaseUser.uid)
    this.ref = base.listenTo(`authentication/allMembers/notes`, {
      context: this,
      asArray: true,
      queries: { limitToLast: 10,},
      onFailure: (err) => {
        console.log('inside', err)
        this.setState({loading: false})
      },
      then: (notes) => {
        this.setState({notes: notes, loading: false});
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

  _removeNote(key){

    /*
     * Calling setState here will update the '/notes' ref on our Firebase.
     * Notice that I'm also updating the 'show' state.  Because there is no
     * binding to our 'show' state, it will update the local 'show' state normally,
     * without going to Firebase.
     */
     console.log('key', key)
  }

  _onFormSubmit(event, newNote) {
    event.preventDefault()
    newNote.uid = this.firebaseUser.uid
    newNote.isPublic = this.state.isPublic
    if (newNote.note) {
      const uid = this.firebaseUser.uid
      newNote.isPublic = this.state.isPublic
      newNote.uid = uid

      base.push(`authentication/userWritable/notes-queue/tasks`, {
        data: {
          timestamp: new Date().toString(),
          note: newNote
        }
      }).then(() => this.setState({note: ''})).catch(err => console.log(err));
    }

  }

  _onChange(value) {
    this.setState({note:value})
  }

  _onCheck() {
    this.setState({isPublic: !this.state.isPublic})
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
                           removeNote={ (key) => this._removeNote(key) }/>
              <NewNote onFormSubmit={ this._onFormSubmit.bind(this) }
                          displayName={ displayName }
                          photoURL={ photoURL }
                          value={ note }
                          Text={Text}
                          onChange={ this._onChange.bind(this) }
                          language={language}
                          onCheck={ () => this._onCheck() }
                          isChecked={!this.state.isPublic}/>
          </div>
    );
  }
}

export default NotesContainer

NotesContainer.propTypes = {
  language: React.PropTypes.string.isRequired
}
