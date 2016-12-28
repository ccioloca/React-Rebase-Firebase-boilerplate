import React, { Component } from 'react'
import base from '../rebase.config.js'
import Center from '../layout/Center'
import LoadingAnimation from '../components/LoadingAnimation'
import PublicNotesList from '../components/PublicNotesList'
import Card from '../layout/Card'

class PublicNotesContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      notes: [],
      comment: '',
      loading: true,
      newCommentValue: {},
      showAddNewComment: false
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

  _onAddNewCommentFormSubmit(event, newCommentValue, key) {
    event.preventDefault()
    console.log('onAddNewCommentFormSubmit', newCommentValue)
    if (newCommentValue) {
      base.push(`authentication/userWritable/comments-queue/tasks`, {
       data: {
         timestamp: new Date().toString(),
         action: 'add',
         note_id: key,
         uid: this.firebaseUser.uid,
         comment: newCommentValue.addNewComment
       }
     }).then(() => this.setState({note: ''})).catch(err => console.log(err))
      this.setState({customComments: this.state.customComments.concat([newCommentValue.addNewComment])})
      this.setState({newCommentValue: ''})
     }
  }

  _onAddNewCommentChange(value) {
    console.log('onAddNewCommentChange', value)
    var newCommentValueArr = this.state.newCommentValue
    newCommentValueArr.addNewComment = value
    this.setState({newCommentValue:newCommentValueArr},() => {console.log('onAddNewCommentChangeSetState', this.state.newCommentValue)})
  }

  _toggleShowAddNewComment() {
    this.setState({showAddNewComment: !this.state.showAddNewComment})
  }

  render() {
    const { language, Text } = this.props
    const { notes, comment, newCommentValue } = this.state

    console.log('render', newCommentValue)

    return (
        this.state.loading
        ? <Card><Center height={'300px'}><LoadingAnimation height='auto'/></Center></Card>
        : <Card>
            <PublicNotesList Text={Text}
                           language={language}
                           notes={notes}
                           removeNote={ (key) => this._removeNote(key) }
                           onAddNewCommentFormSubmit={this._onAddNewCommentFormSubmit.bind(this) }
                           onAddNewCommentChange={ this._onAddNewCommentChange.bind(this) }
                           toggleShowAddNewComment={ this._toggleShowAddNewComment.bind(this) }
                           value={ newCommentValue.addNewComment } />
          </Card>
    );
  }
}

export default PublicNotesContainer

PublicNotesContainer.propTypes = {
  language: React.PropTypes.string.isRequired,
  Text: React.PropTypes.object.isRequired
}
