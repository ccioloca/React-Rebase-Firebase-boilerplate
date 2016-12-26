import React, { Component } from 'react'
import base from '../rebase.config.js'
import Center from '../layout/Center'
import LoadingAnimation from '../components/LoadingAnimation'
import UserNotesList from '../components/UserNotesList'
import NewNote from '../components/NewNote'
import Card from '../layout/Card'
import Grid from '../layout/Grid'
import Cell from '../layout/Cell'

class UserNotesContainer extends Component {

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
    const uid = this.firebaseUser.uid
    this.ref = base.listenTo(`authentication/userReadable/${uid}/notes`, {
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
    base.removeBinding(this.ref);
  }

  _removeNote(key){
     base.push(`authentication/userWritable/notes-queue/tasks`, {
       data: {
         timestamp: new Date().toString(),
         action: 'delete',
         language: this.props.language,
         target: key,
         uid: this.firebaseUser.uid
       }
     }).then(() => this.setState({note: ''})).catch(err => console.log(err));
  }

  _onFormSubmit(event, newNote) {
    event.preventDefault()
    if (newNote.note) {
      newNote.uid = this.firebaseUser.uid
      base.push(`authentication/userWritable/notes-queue/tasks`, {
        data: {
          timestamp: new Date().toString(),
          action: 'add',
          note: newNote,
          isPublic: this.state.isPublic,
          language: this.props.language
        }
      }).then(() => this.setState({note: '', })).catch(err => console.log(err));
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

    return (
        this.state.loading
        ? <Center height={'300px'}><LoadingAnimation height='auto'/></Center>
        : <Grid>
            <Cell desktop='three-quarters' tablet='two-thirds' mobile="one-whole">
              <Card>
                <UserNotesList Text={Text}
                             language={language}
                             notes={notes}
                             displayName={displayName}
                             photoURL={photoURL}
                             removeNote={ (key) => this._removeNote(key) }/>
              </Card>
              <NewNote onFormSubmit={ this._onFormSubmit.bind(this) }
                          displayName={ displayName }
                          photoURL={ photoURL }
                          value={ note }
                          Text={Text}
                          onChange={ this._onChange.bind(this) }
                          language={language}
                          onCheck={ () => this._onCheck() }
                          isChecked={!this.state.isPublic}/>
            </Cell>
            <Cell desktop='one-quarter' tablet='one-third' mobile='one-whole'>
              Choose category section goes here
            </Cell>
          </Grid>
    );
  }
}

export default UserNotesContainer

UserNotesContainer.propTypes = {
  language: React.PropTypes.string.isRequired
}
