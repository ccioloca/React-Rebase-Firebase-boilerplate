import React, { Component } from 'react'
import base from '../rebase.config.js'
import Center from '../layout/Center'
import LoadingAnimation from '../components/LoadingAnimation'
import PublicNotesList from '../components/PublicNotesList'
import Card from '../layout/Card'
import CommentForm from '../components/CommentForm'

class PublicNotesContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      notes: [],
      comment: '',
      loading: true,
      value: '',
      selectedNote: ''
    }
    this.firebaseUser = base.auth().currentUser
  }

  componentWillMount(){
    this.ref = base.listenTo(`authentication/allMembers/notes/${this.props.language}`, {
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
     }).then(() => this.setState({note: ''})).catch(err => console.log(err))
  }

  _handleSubmit(event, data) {
    event.preventDefault()
    const {uid, photoURL, displayName} = this.firebaseUser
    const key = this.state.selectedNote

    data.photoURL = photoURL
    data.displayName = displayName
    data.uid = uid

    if (data && key) {
      base.push(`authentication/userWritable/comments-queue/tasks`, {
       data: {
         timestamp: new Date().toString(),
         action: 'add',
         note_id: key,
         language: this.props.language,
         comment: data
       }
     }).then(() => {
       this.setState({value: '', selectedNote: ''})
    }).catch(err => console.log(err))}
  }

  _handleChange(value) {
    this.setState({value})
  }

  _toggleCommentFormVisibility(key) {
    if( this.state.selectedNote === key ) {
      this.setState({selectedNote: '', value: ''})
    } else {
      this.setState({selectedNote: key, value: ''})
    }
  }

  _removeComment(noteKey, commentUid){
     base.auth().currentUser.getToken(true).then((idToken) => {
        base.push(`authentication/userWritable/comments-queue/tasks`, {
            data: {
                timestamp: new Date().toString(),
                action: 'delete',
                language: this.props.language,
                target: commentUid,
                note_id: noteKey,
                uid: this.firebaseUser.uid,
                idToken: idToken
            }
        }).then(() => this.setState({comment: ''})).catch(err => console.log(err))
     })
  }

  render() {
    const { language, Text } = this.props
    const { notes, value, selectedNote } = this.state


    return (
        this.state.loading
        ? <Card><Center height={'300px'}><LoadingAnimation height='auto'/></Center></Card>
        : <Card>
            <PublicNotesList Text={Text}
                             language={language}
                             notes={notes}
                             removeNote={ (key) => this._removeNote(key) }
                             toggleCommentFormVisibility={ this._toggleCommentFormVisibility.bind(this) }
                             selectedNote={ selectedNote }
                             firebaseUser={ this.firebaseUser }
                             removeComment={ this._removeComment.bind(this) } >
               <CommentForm Text={Text}
                            language={language}
                            handleSubmit={this._handleSubmit.bind(this) }
                            handleChange={ this._handleChange.bind(this) }
                            value={value} />
            </PublicNotesList>

          </Card>
    );
  }
}

export default PublicNotesContainer

PublicNotesContainer.propTypes = {
  language: React.PropTypes.string.isRequired,
  Text: React.PropTypes.object.isRequired
}
